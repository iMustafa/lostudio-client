import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
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

const acceptedFileFormats = [
  "text/plain", "application/pdf", "image/png", "image/tiff", "image/webp", "image/gif", "image/jpeg",
  "application/json", "audio/mpeg", "audio/wav", "audio/webm", "video/mpeg", "video/ogg", "video/mp2t",
  "video/webm", "video/3gpp", "video/3gpp2", "application/xml", "text/csv"
]

const FileWidgetSettings = ({ widget, handleSettingsClose, isAdding, onWidgetAdd }) => {
  const classes = useStyles()
  const [properties, setProperties] = useState({
    id: '', name: '', className: ''
  })
  const [selectedFileFormats, setSelectedFileFormats] = useState([])

  const handlePropertiesChange = (event) => {
    const { name, value } = event.target
    setProperties({ ...properties, [name]: value })
  }

  const handleFieldChange = name => event => {
    const { checked } = event.target
    checked ? setSelectedFileFormats([...selectedFileFormats, name]) : setSelectedFileFormats(selectedFileFormats.filter(format => format != name))
  }

  const saveConfigData = async () => {
    try {
      const data = {
        properties: {
          ...properties,
          acceptedFileFormats: selectedFileFormats
        },
        type: 'File'
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

      <h2 className={classes.h2}>
        <span className={classes.span}>Unique Properties</span>
      </h2>
      <Typography>Accepted File Formats</Typography>
      <Typography style={{ color: "#F00", fontSize: 10 }}>*Leave blank to accept all file types.</Typography>
      {acceptedFileFormats.map(format => (<FormControlLabel
        key={format}
        control={
          <Checkbox checked={selectedFileFormats.includes(format)} onChange={handleFieldChange(format)} value={format} />
        }
        label={format}
      />))}

      <Button onClick={saveConfigData} fullWidth color="primary" className={classes.formControl}>Save</Button>
    </div>
  )
}

export default FileWidgetSettings