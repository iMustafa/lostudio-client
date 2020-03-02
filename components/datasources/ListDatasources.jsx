import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import MaterialTable from 'material-table'
import Details from '@material-ui/icons/Details'
import Edit from '@material-ui/icons/Edit'

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
  }
}));

const ListDatasource = ({ datasources }) => {
  const classes = useStyles()

  const props = {
    options: {
      search: true
    }
  }
  
  return (
    <Card className={classes.root}>
      <div className={classes.cardTitle}>My Data sources</div>
      <div className={classes.cardBody}>
        <MaterialTable
          title=""
          style={{ boxShadow: 'none' }}
          columns={[
            { title: 'Name', field: 'title' },
            { title: 'Type', field: 'type' },
            { title: 'Description', field: 'description' }
          ]}
          data={Object.values(datasources)}
          {...props}
          actions={[
            {
              icon: () => <Details />,
              tooltip: 'Info',
              onClick: (event, rowData) => alert("You saved " + rowData.title)
            },
            {
              icon: () => <Edit />,
              tooltip: 'Edit',
              onClick: (event, rowData) => alert("You saved " + rowData.title)
            }
          ]}
        />
      </div>
    </Card>
  )
}


export default ListDatasource;