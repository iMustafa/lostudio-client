import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import SearchInput from '../SearchInput'
import DBItem from './AddDatasourceItem'
import Datasources from './datasources'

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
  }
}));

const AddDatasource = () => {
  const classes = useStyles();

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
              <DBItem name={datasource.name} type={datasource.type || datasource.name.toLowerCase().replace(/\s/g, '-')} />
            </Grid>
          ))}
        </Grid>
      </div>
    </Card>
  )
}


export default AddDatasource;