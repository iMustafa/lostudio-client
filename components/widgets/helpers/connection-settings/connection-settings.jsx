import { makeStyles } from '@material-ui/core/styles'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import DatabaseConnection from './database-connection'
import HTTPConnection from './http-connection'

const useStyles = makeStyles({
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
  }
})

const ConnectionSettings = ({
  connectionMethod,
  setConnectionMethod,
  isAdding,
  setDoc,
  setDatasource,
  setFields,
  doc,
  datasource,
  fields,
  primaryKey,
  setPrimaryKey,
  url, setURL,
  headers, setHeaders,
  method, setMethod,
  body, setBody,
  query, setQuery
}) => {
  const classes = useStyles()

  return (
    <div>
      <h2 className={classes.h2}>
        <span className={classes.span}>Connection Settings</span>
      </h2>
      <FormControl>
        <FormLabel>Connection Method</FormLabel>
        <RadioGroup
          style={{ display: 'flex', flexDirection: 'row' }}
          value={connectionMethod}
          onChange={event => setConnectionMethod(event.target.value)}
        >
          <FormControlLabel value="database" control={<Radio />} label="Database" />
          <FormControlLabel value="http" control={<Radio />} label="HTTP" />
        </RadioGroup>
      </FormControl>
      {
        connectionMethod == 'database' ? (
          <DatabaseConnection
            isAdding={isAdding}
            setDoc={setDoc}
            setDatasource={setDatasource}
            setFields={setFields}
            doc={doc}
            datasource={datasource}
            fields={fields}
            primaryKey={primaryKey}
            setPrimaryKey={setPrimaryKey}
          />
        ) : (
            <HTTPConnection
              url={url} setURL={setURL}
              headers={headers} setHeaders={setHeaders}
              method={method} setMethod={setMethod}
              body={body} setBody={setBody}
              query={query} setQuery={setQuery}
            />
          )
      }
    </div>
  )
}

export default ConnectionSettings