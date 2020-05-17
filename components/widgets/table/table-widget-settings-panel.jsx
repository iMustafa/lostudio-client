import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import WidgetSettingsActions from '../../../actions/widgetSettings.actions'
import { ConnectionSettings } from '../helpers'

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

const TableWidgetSettingsPanel = ({ widget, handleSettingsClose, isAdding, onWidgetAdd }) => {
  const classes = useStyles()
  const [connectionMethod, setConnectionMethod] = useState(!isAdding ? widget.config.connectionMethod : 'database')
  const [doc, setDoc] = useState(!isAdding ? widget.config.docId : '')
  const [title, setTitle] = useState(!isAdding ? widget.title : '')
  const [datasource, setDatasource] = useState(!isAdding ? widget.dataSourceId : '')
  const [fields, setFields] = useState(!isAdding ? widget.config.fields : [])
  const [primaryKey, setPrimaryKey] = useState(!isAdding ? widget.config.primaryKey : null)
  const [isEditable, setIsEditable] = useState(isAdding ? false : widget.config.isEditable)
  const [isDeletable, setIsDeletable] = useState(isAdding ? false : widget.config.isDeletable)
  const [isAddable, setIsAddable] = useState(isAdding ? false : widget.config.isAddable)

  const [url, setURL] = useState(isAdding ? '' : widget.config.url)
  const [headers, setHeaders] = useState(isAdding ? {} : widget.config.headers || {})
  const [method, setMethod] = useState(isAdding ? '' : widget.config.method)
  const [body, setBody] = useState(isAdding ? {} : widget.config.body || {})
  const [query, setQuery] = useState(isAdding ? {} : widget.config.query || {})

  const saveConfigSettings = async () => {
    try {
      const data = {
        dataSourceId: datasource,
        title,
        config: {
          docId: doc,
          fields,
          type: 'simple',
          func: 'find',
          query: {},
          isEditable,
          isDeletable,
          isAddable,
          primaryKey,
          connectionMethod,
          url,
          headers,
          method,
          body,
          query
        },
        type: 'Table'
      }
      console.log(data)
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

  return (
    <div>
      <h2 className={classes.h2}>
        <span className={classes.span}>Widget Properties</span>
      </h2>
      <FormControl fullWidth className={classes.formControl}>
        <InputLabel id='title'>Title</InputLabel>
        <Input value={title} onChange={event => { setTitle(event.target.value) }} />
      </FormControl>
      <div style={{ marginTop: 20 }}>
        <FormControlLabel
          control={
            <Checkbox checked={isEditable} onChange={event => { setIsEditable(event.target.checked) }} />
          }
          label="Allow Edit?"
        />
        <FormControlLabel
          control={
            <Checkbox checked={isDeletable} onChange={event => { setIsDeletable(event.target.checked) }} />
          }
          label="Allow Delete?"
        />
        <FormControlLabel
          control={
            <Checkbox checked={isAddable} onChange={event => { setIsAddable(event.target.checked) }} />
          }
          label="Allow Add?"
        />
      </div>

      <ConnectionSettings
        isAdding={isAdding}
        connectionMethod={connectionMethod}
        setConnectionMethod={setConnectionMethod}
        setDoc={setDoc}
        setDatasource={setDatasource}
        setFields={setFields}
        doc={doc}
        datasource={datasource}
        fields={fields}
        primaryKey={primaryKey}
        setPrimaryKey={setPrimaryKey}
        url={url} setURL={setURL}
        headers={headers} setHeaders={setHeaders}
        method={method} setMethod={setMethod}
        body={body} setBody={setBody}
        query={query} setQuery={setQuery}
      />

      <Button fullWidth className={classes.formControl} onClick={saveConfigSettings}>{isAdding ? 'Add' : 'Save'}</Button>
    </div>
  )
}

export default TableWidgetSettingsPanel