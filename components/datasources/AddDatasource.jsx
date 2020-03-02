import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import SearchInput from '../SearchInput'
import DBItem from './AddDatasourceItem'
import Datasources from './datasources'

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import AddMongoDBDataSource from './add/mongodb'
import AddPosgreSQLDataSource from './add/postgresql'
import AddMsSQLDataSource from './add/mssql'
import AddMySQLDataSource from './add/mysql'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '25px'
  },
  cardBody: {
    padding: '10px'
  },
  cardTitle: {
    fontSize: '12px',
    backgroundColor: '#3F51B5',
    padding: '3px 3px 3px 6px',
    color: '#FFF',
    fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"]
  },
  gridStyles: {
    margin: '10px 0 5px 0',
    width: '100%'
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const AddDatasource = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [type, setType] = useState('')

  const handleOpen = (type) => {
    setType(type)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const onClick = (type, _) => {
    handleOpen(type)
  }

  const returnDialog = ($type) => {
    switch ($type) {
      case 'mongodb':
        return <AddMongoDBDataSource />
      case 'mssql':
        return <AddMsSQLDataSource />
      case 'postgresql':
        return <AddPosgreSQLDataSource />
      case 'mysql':
        return <AddMySQLDataSource />
    }
  }

  return (
    <Card className={classes.root}>
      <div className={classes.cardTitle}>
        Add a New Data Source
      </div>
      <div className={classes.cardBody}>
        <SearchInput />
        <Grid container spacing={2} className={classes.gridStyles}>
          {Datasources.map(datasource => (
            <Grid item xs={3} key={datasource.name}>
              <DBItem onClick={onClick} name={datasource.name} type={datasource.type || datasource.name.toLowerCase().replace(/\s/g, '-')} />
            </Grid>
          ))}
        </Grid>

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            {returnDialog(type)}
          </Fade>
        </Modal>

      </div>
    </Card>
  )
}


export default AddDatasource;