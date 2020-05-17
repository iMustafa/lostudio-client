import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core/styles'
import ButtonBase from '@material-ui/core/ButtonBase'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    cursor: 'pointer',
    outline: 'none'
  },
  card: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    paddingTop: 15,
    paddingBottom: 15,
  }
}))

const TableWidget = ({ title, widget, icon, onWidgetClick, addPredefinedWidget }) => {
  const classes = useStyles()

  return (
    <ButtonBase className={classes.root} onClick={widget ? addPredefinedWidget.bind(this, widget) : onWidgetClick.bind(this, title)}>
      <Card className={classes.card}>
        {icon}
        <Typography style={{ marginTop: 10 }}>{widget ? widget.title : title}</Typography>
      </Card>
    </ButtonBase>
  )
}

export default TableWidget