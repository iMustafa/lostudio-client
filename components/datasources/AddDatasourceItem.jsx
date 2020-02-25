import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'

const useStyles = makeStyles(theme => ({
  root: { display: 'flex', padding: '10px 20px', justifyContent: 'space-between', alignItems: 'center' },
  image: { width: '30px' },
  text: { fontFamily: "Roboto" }
}));

const AddDatasource = ({ type, func, name }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.text}>{name}</div>
      <div>
        <img className={classes.image} src={require(`../../static/${type}.png`)} />
      </div>
    </Card>
  )
}


export default AddDatasource;