import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import router from 'next/router'

const useStyles = makeStyles(theme => ({
  media: {
    height: 140,
  }
}))

const DashbordItem = ({ title, description, id, permissions }) => {
  const classes = useStyles()

  const renderButtons = () => {
    return !permissions ?
      (
        <CardActions>
          <Button size="small" color="primary" onClick={() => router.push(`/dashboards/${id}/edit`)}>Edit</Button>
          <Button size="small" color="primary">View</Button>
        </CardActions>
      ) : permissions.editor ?
        (
          <CardActions>
            <Button size="small" color="primary" onClick={() => router.push(`/dashboards/${id}/edit`)}>Edit</Button>
            <Button size="small" color="primary">View</Button>
          </CardActions>
        ) :
        (
          <CardActions>
            <Button size="small" color="primary">View</Button>
          </CardActions>
        )
  }

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://via.placeholder.com/350x150"
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      {renderButtons()}
    </Card>
  )
}

export default DashbordItem