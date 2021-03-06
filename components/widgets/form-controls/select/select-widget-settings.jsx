import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import Checkbox from '@material-ui/core/Checkbox'
import RadioGroup from '@material-ui/core/RadioGroup'
import Select from '@material-ui/core/Select'
import DataSourceActions from '../../../../actions/datasource.actions'
import WidgetSettingsActions from '../../../../actions/widgetSettings.actions'
import Swal from 'sweetalert2'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  list: {
    width: 500,
    paddingLeft: "15px",
    paddingRight: "15px",
    paddingTop: "15px"
  },
  h2: {
    width: '100%',
    textAlign: 'center',
    borderBottom: '1px solid #000',
    lineHeight: '0.1em',
    marginTop: "20px",
    marginBottom: "20px",
    fontFamily: 'Roboto',
    fontSize: '13px',
    color: "#3F51B5"
  },
  span: {
    background: '#fff',
    padding: '0 10px'
  },
  formControl: {
    marginTop: "15px"
  }
}))

const SelectWidgetSettings = ({ widget, handleSettingsClose, isAdding, onWidgetAdd }) => {
  const classes = useStyles()
  const [properties, setProperties] = useState({
    label: '', id: '', name: '', className: ''
  })
  const [selectionOption, setSelectionOption] = useState('datasource')
  const [datasources, setDatasources] = useState([])
  const [datasource, setDatasource] = useState(!isAdding ? widget.dataSourceId : '')
  const [docList, setDocList] = useState([])
  const [doc, setDoc] = useState(!isAdding ? widget.config.docId : '')
  const [fieldList, setFieldList] = useState([])
  const [fields, setFields] = useState(!isAdding ? widget.config.fields : '')
  const [linkToFormGroup, setLinkToFormGroup] = useState(false)
  const [formGroups, setFormGroups] = useState([])
  const [selectedFormGroup, setSelectedFormGroup] = useState(null)

  const getDatasources = async () => {
    try {
      const $datasources = await DataSourceActions.getDatasources({})
      if (!isAdding) {
        const $docList = await DataSourceActions.getDocList(datasource)
        const $fieldList = await DataSourceActions.getFieldList(datasource, doc)
        setDocList($docList)
        setFieldList($fieldList)
      }
      setDatasources($datasources)
      return $datasources
    } catch (e) {
      console.log(e)
    }
  }

  const getDocList = async (id) => {
    try {
      setDatasource(id)
      const $docList = await DataSourceActions.getDocList(id)
      setDocList($docList)
      return $docList
    } catch (e) {
      console.log(e)
    }
  }

  const getFieldList = async (id, docId) => {
    try {
      setDoc(docId)
      const $fieldList = await DataSourceActions.getFieldList(id, docId)
      setFieldList($fieldList)
      return $fieldList
    } catch (e) {
      console.log(e)
    }
  }

  const handleDatasourceChange = async (event) => {
    const { name, value } = event.target
    setFieldList([])
    setFields([])
    await getDocList(value)
  }

  const handleDocChange = async (event) => {
    const { name, value } = event.target
    setFieldList([])
    setFields([])
    await getFieldList(datasource, value)
  }

  const handleFieldChange = event => {
    const { value } = event.target
    setFields(value)
  }

  const handlePropertiesChange = (event) => {
    const { name, value } = event.target
    setProperties({ ...properties, [name]: value })
  }

  useEffect(() => {
    getDatasources()
  }, [])

  const handleSourceChange = (event) => {
    const { value } = event.target
    setSelectionOption(value)
  }

  useEffect(() => {
    const getFormGroups = async () => {
      try {
        const $formGroups = await WidgetSettingsActions.getFormGroupWidgets()
        setFormGroups($formGroups)
      } catch (e) {
        console.log(e)
      }
    }
    getFormGroups()
  }, [])

  const handleSelectFormGroup = event => {
    const { value } = event.target
    setSelectedFormGroup(value)
  }

  const handleLinkToFormGroup = event => {
    const { checked } = event.target
    if (!checked)
      setSelectedFormGroup(null)
    setLinkToFormGroup(checked)
  }

  const renderFormGroupSelection = _ => linkToFormGroup ? (
    <FormControl fullWidth>
      <InputLabel id="form-group-title">Form Group</InputLabel>
      <Select
        fullWidth
        labelId="form-group-title"
        value={selectedFormGroup}
        onChange={handleSelectFormGroup}
      >
        {
          formGroups.map(formGroup => (
            <MenuItem value={formGroup.id}>{formGroup.properties.name}</MenuItem>
          ))
        }
      </Select>
    </FormControl>
  ) : (
      <div></div>
    )

  const renderFieldSettings = () => fieldList.length ?
    (
      <div>
        <h2 className={classes.h2}>
          <span className={classes.span}>Fields Settings</span>
        </h2>
        <RadioGroup onChange={handleFieldChange}>
          {
            fieldList.map(field => (
              <FormControlLabel
                key={field}
                control={<Radio value={field} />}
                label={field}
              />))
          }
        </RadioGroup>
        <Typography style={{ fontSize: 12, color: '#F00', marginTop: 10 }}>
          * You can only select one field in a select field.
    </Typography>
      </div>
    ) : (
      <div>
        
      </div>
    )

    const saveConfigData = async () => {
      try {
        const data = {
          dataSourceId: datasource,
          config: {
            docId: doc,
            fields: [fields],
            type: selectionOption == 'datasource' ? 'simple' : 'constant',
            func: 'find',
            query: {},
            values: selectionOption == 'datasource' ? [] : []
          },
          properties,
          type: 'Select'
        }
        if (isAdding) {
          onWidgetAdd(data, true, selectedFormGroup)
        } else {
          const update = await WidgetSettingsActions.updateWidgetSettings(widget.id, data)
          handleSettingsClose(update)
        }
      } catch (e) {
        console.log(e)
      }
    }

  return (
    <div className={classes.list} role="presentation">
      <h2 className={classes.h2}>
        <span className={classes.span}>Widget Info</span>
      </h2>
      <FormControl fullWidth className={classes.formControl}>
        <InputLabel>Title</InputLabel>
        <Input />
      </FormControl>

      <h2 className={classes.h2}>
        <span className={classes.span}>Widget Properties</span>
      </h2>
      <FormControl fullWidth className={classes.formControl}>
        <InputLabel>Label</InputLabel>
        <Input name='label' onChange={handlePropertiesChange} value={properties.label} />
      </FormControl>

      <FormControl fullWidth className={classes.formControl}>
        <InputLabel>ID</InputLabel>
        <Input name='id' onChange={handlePropertiesChange} value={properties.id} />
      </FormControl>

      <FormControl fullWidth className={classes.formControl}>
        <InputLabel>Name</InputLabel>
        <Input name='name' onChange={handlePropertiesChange} value={properties.name} />
      </FormControl>

      <FormControl fullWidth className={classes.formControl}>
        <InputLabel>Class name</InputLabel>
        <Input name='className' onChange={handlePropertiesChange} value={properties.className} />
      </FormControl>

      <FormControl fullWidth className={classes.formControl}>
        <FormControlLabel
          control={<Checkbox checked={linkToFormGroup} onChange={handleLinkToFormGroup} />}
          label="Link To Form Group?"
        />
      </FormControl>

      {renderFormGroupSelection()}

      <h2 className={classes.h2}>
        <span className={classes.span}>Unique Properties</span>
      </h2>
      <FormGroup row>
        <RadioGroup onChange={handleSourceChange} value={selectionOption} style={{ justifyContent: 'space-evenly', width: '100%', flexDirection: 'row' }}>
          <FormControlLabel value="datasource" control={<Radio />} label="From Data Source" />
          <FormControlLabel value="fixed" control={<Radio />} label="Fixed Values" />
        </RadioGroup>
      </FormGroup>
      {
        selectionOption == 'datasource' ? (
          <div>
            <FormControl fullWidth className={classes.formControl}>
              <InputLabel id="data-source">Data Source</InputLabel>
              <Select
                name="datasource"
                labelId="data-source"
                value={datasource}
                onChange={handleDatasourceChange}
              >
                {datasources.map(item => (<MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>))}
              </Select>
            </FormControl>

            <FormControl fullWidth className={classes.formControl} disabled={datasource ? false : true}>
              <InputLabel id="doc-list">Table/Collection</InputLabel>
              <Select
                name="docList"
                labelId="doc-list"
                value={doc}
                onChange={handleDocChange}
              >
                {docList.map(item => (<MenuItem key={item} value={item}>{item}</MenuItem>))}
              </Select>
            </FormControl>
            {renderFieldSettings()}
          </div>
        ) : (
            <div>

            </div>
          )
      }

      <Button onClick={saveConfigData} fullWidth color="primary" className={classes.formControl}>Save</Button>
    </div>
  )
}

export default SelectWidgetSettings