import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
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

const ImageWidgetSettings = ({ widget, handleSettingsClose, isAdding, onWidgetAdd }) => {
  const classes = useStyles()

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


      <Button fullWidth color="primary" className={classes.formControl}>Save</Button>
    </div>
  )
}

export default ImageWidgetSettings