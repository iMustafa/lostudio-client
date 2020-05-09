import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import Select from '@material-ui/core/Select'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import DataSourceActions from '../../../../actions/datasource.actions'
import WidgetSettingsActions from '../../../../actions/widgetSettings.actions'
import Swal from 'sweetalert2'

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

const AreaChartWidgetSettings = ({ widget, handleSettingsClose, isAdding, onWidgetAdd }) => {
  const classes = useStyles()
  const [datasources, setDatasources] = useState([])
  const [datasource, setDatasource] = useState(!isAdding ? widget.dataSourceId : '')
  const [docList, setDocList] = useState([])
  const [doc, setDoc] = useState(!isAdding ? widget.config.docId : '')
  const [fieldList, setFieldList] = useState([])
  const [fields, setFields] = useState(!isAdding ? widget.config.fields : [])
  const [query, setQuery] = useState({})

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

  const handleFieldChange = name => event => {
    const { checked } = event.target
    checked ? setFields([...fields, name]) : setFields(fields.filter(field => field != name))
  }

  const renderFieldSettings = () => fieldList.length ? (<div>
    <h2 className={classes.h2}>
      <span className={classes.span}>Fields Settings</span>
    </h2>

    {fieldList.map(field => (<FormControlLabel
      key={field}
      control={
        <Checkbox checked={fields.includes(field)} onChange={handleFieldChange(field)} value={field} />
      }
      label={field}
    />))}
  </div>) : <div></div>

  const renderQuerySettings = () => fields.length ? (<div>
    <h2 className={classes.h2}>
      <span className={classes.span}>Query Settings</span>
    </h2>

    {fields.map(field => (<div>

    </div>))}
  </div>) : <div></div>

  const saveConfigSettings = async () => {
    try {
      const data = {
        dataSourceId: datasource,
        config: {
          docId: doc,
          fields,
          type: 'simple',
          func: 'find',
          query: {}
        },
        type: 'Table'
      }
      if (isAdding) {
        onWidgetAdd(data)
      } else {
        const update = await WidgetSettingsActions.updateWidgetSettings(widget.id, data)
        handleSettingsClose(update)
      }
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getDatasources()
  }, [])

  return (
    <div className={classes.list} role="presentation">
      <div>
        <h2 className={classes.h2}>
          <span className={classes.span}>Widget Properties</span>
        </h2>
        <FormControl fullWidth className={classes.formControl}>
          <InputLabel id='title'>Title</InputLabel>
          <Input />
        </FormControl>
        <h2 className={classes.h2}>
          <span className={classes.span}>Connection Settings</span>
        </h2>
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

        {renderQuerySettings()}

        <Button fullWidth onClick={saveConfigSettings}>{isAdding ? 'Add' : 'Save'}</Button>

      </div>
    </div>
  )
}

export default AreaChartWidgetSettings