import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import MaterialTable from 'material-table';
import Grid from '@material-ui/core/Grid'
import SearchInput from '../SearchInput'

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
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.cardTitle}>My Data sources</div>
      <div className={classes.cardBody}>
        <MaterialTable
          title="Basic Search Preview"
          style={{ boxShadow: 'none' }}
          columns={[
            { title: 'Name', field: 'name' },
            { title: 'Surname', field: 'surname' },
            { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
            {
              title: 'Birth Place',
              field: 'birthCity',
              lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
            },
          ]}
          data={[
            { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
            { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
          ]}
          options={{
            search: true
          }}
        />
      </div>
    </Card>
  )
}


export default ListDatasource;