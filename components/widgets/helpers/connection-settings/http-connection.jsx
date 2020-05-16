import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Checkbox from '@material-ui/core/Checkbox'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import SaveIcon from '@material-ui/icons/Save'
import CancelIcon from '@material-ui/icons/Cancel'
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles({
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
})

const httpMethods = [
  { value: 'get', title: 'Get' },
  { value: 'post', title: 'Post' },
  { value: 'put', title: 'Put' },
  { value: 'patch', title: 'Patch' },
  { value: 'head', title: 'Head' },
  { value: 'delete', title: 'Delete' }
]

const HTTPConnection = ({
  url, setURL,
  method, setMethod,
  headers, setHeaders,
  body, setBody,
  query, setQuery
}) => {
  const classes = useStyles()
  const [requestHeader, setRequestHeader] = useState({ key: '', value: '' })
  const [isAddingRequestHeader, setIsAddingRequestHeader] = useState(false)
  const [queryParam, setQueryParam] = useState({ key: '', value: '' })
  const [isAddingRequestQueryParam, setIsAddingQueryParam] = useState(false)
  const [bodyParam, setBodyParam] = useState({ key: '', value: '' })
  const [isAddingRequestBodyParam, setIsAddingRequestBodyParam] = useState(false)

  const renderRequestHeader = header => {

  }

  const renderQueryParameter = queryParameter => {

  }

  const renderBodyParameter = bodyParameter => {

  }

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id='title'>Request URL</InputLabel>
        <Input value={url} onChange={event => { setURL(event.target.value) }} />
      </FormControl>

      <FormControl fullWidth className={classes.formControl}>
        <InputLabel id='http-method-label'>Request Method</InputLabel>
        <Select value={method} onChange={event => { setMethod(event.target.value) }} labelId="http-method-label" fullWidth className={classes.formControl}>
          {httpMethods.map(m => (<MenuItem value={m.value} key={m.value}>{m.title}</MenuItem>))}
        </Select>
      </FormControl>

      <h2 className={classes.h2}>
        <span className={classes.span}>Request Headers</span>
      </h2>
      {
        isAddingRequestHeader ? (
          <Card style={{ padding: 15, marginBottom: 15 }}>
            <Grid container spacing={0}>
              <Grid item xs={6} style={{ paddingLeft: 10, paddingRight: 10 }}>
                <FormControl fullWidth>
                  <InputLabel>Key</InputLabel>
                  <Input onChange={event => {
                    setRequestHeader({ ...requestHeader, key: event.target.value })
                  }} />
                </FormControl>
              </Grid>
              <Grid item xs={6} style={{ paddingLeft: 10, paddingRight: 10 }}>
                <FormControl fullWidth>
                  <InputLabel>Value</InputLabel>
                  <Input onChange={event => {
                    setRequestHeader({ ...requestHeader, value: event.target.value })
                  }} />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={0} className={classes.formControl}>
              <Grid item xs={6}>
                <Button fullWidth onClick={() => { setIsAddingRequestHeader(false) }}>
                  <CancelIcon style={{ color: "#F00" }} />
                  <Typography>Cancel</Typography>
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button fullWidth>
                  <SaveIcon style={{ color: "#3F51B5" }} />
                  <Typography>Save</Typography>
                </Button>
              </Grid>
            </Grid>
          </Card>
        ) : (
            <Button fullWidth onClick={() => { setIsAddingRequestHeader(true) }}>Add</Button>
          )
      }

      <h2 className={classes.h2}>
        <span className={classes.span}>Request Query Parameters</span>
      </h2>
      {
        isAddingRequestQueryParam ? (
          <Card style={{ padding: 15, marginBottom: 15 }}>
            <Grid container spacing={0}>
              <Grid item xs={6}>
                <FormControl fullWidth style={{ paddingLeft: 10, paddingRight: 10 }}>
                  <InputLabel>Key</InputLabel>
                  <Input onChange={event => {
                    setQueryParam({ ...queryParam, key: event.target.value })
                  }} />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth style={{ paddingLeft: 10, paddingRight: 10 }}>
                  <InputLabel>Value</InputLabel>
                  <Input onChange={event => {
                    setQueryParam({ ...queryParam, value: event.target.value })
                  }} />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={0} className={classes.formControl}>
              <Grid item xs={6}>
                <Button fullWidth onClick={() => { setIsAddingQueryParam(false) }}>
                  <CancelIcon style={{ color: "#F00" }} />
                  <Typography>Cancel</Typography>
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button fullWidth>
                  <SaveIcon style={{ color: "#3F51B5" }} />
                  <Typography>Save</Typography>
                </Button>
              </Grid>
            </Grid>
          </Card>
        ) : (
            <Button fullWidth onClick={() => { setIsAddingQueryParam(true) }}>Add</Button>
          )
      }
    </div>
  )
}

export default HTTPConnection