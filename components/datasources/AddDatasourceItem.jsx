import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'

const useStyles = makeStyles(theme => ({
  root: { display: 'flex', padding: '10px 20px', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' },
  image: { width: '30px' },
  text: { fontFamily: "Roboto" }
}));

const AddDatasource = ({ type, func, name, onClick }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} onClick={onClick.bind(this, type)}>
      <div className={classes.text}>{name}</div>
      <div>
        {/* <img className={classes.image} src={require(`../../public/${type}.png`)} /> */}
      </div>
    </Card>
  )
}


export default AddDatasource;