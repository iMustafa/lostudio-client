import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import DataSourceActions from '../../../../actions/datasource.actions'

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

const DatabaseConnection = ({
  isAdding,
  setDoc,
  setDatasource,
  setFields,
  doc,
  datasource,
  fields,
  primaryKey,
  setPrimaryKey
}) => {
  const classes = useStyles()
  const [datasources, setDatasources] = useState([])
  const [docList, setDocList] = useState([])
  const [fieldList, setFieldList] = useState([])
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
    const { value } = event.target
    setFieldList([])
    setFields([])
    await getDocList(value)
  }

  const handleDocChange = async (event) => {
    const { value } = event.target
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

    <FormControl fullWidth>
      <InputLabel id="primary-key">Primary Key</InputLabel>
      <Select
        name="primaryKey"
        labelId="primary-key"
        value={primaryKey}
        onChange={event => setPrimaryKey(event.target.value)}
      >
        {fields.map(item => (<MenuItem key={item} value={item}>{item}</MenuItem>))}
      </Select>
    </FormControl>
  </div>) : <div></div>

  const renderQuerySettings = () => fields.length ? (<div>
    <h2 className={classes.h2}>
      <span className={classes.span}>Query Settings</span>
    </h2>

    {fields.map(field => (<div>

    </div>))}
  </div>) : <div></div>

  useEffect(() => {
    getDatasources()
  }, [])

  return (
    <div>
      <FormControl fullWidth>
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

    </div>
  )
}

export default DatabaseConnection