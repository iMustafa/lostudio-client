import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import router from "next/router";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 140,
  },
  card: {
    height: 280
  }
}));

const DashbordItem = ({ title = "", description, id, permissions, type }) => {
  const classes = useStyles();

  const navigateToBoard = () => {
    if (type == "webpage") router.push(`/webpages/${id}/edit`);
    else router.push(`/dashboards/${id}/edit`);
  };

  const renderButtons = () => {
    return !permissions ? (
      <CardActions>
        <Button size="small" color="primary" onClick={() => navigateToBoard()}>
          Edit
        </Button>
        <Button size="small" color="primary">
          View
        </Button>
      </CardActions>
    ) : permissions.editor ? (
      <CardActions>
        <Button size="small" color="primary" onClick={() => navigateToBoard()}>
          Edit
        </Button>
        <Button size="small" color="primary">
          View
        </Button>
      </CardActions>
    ) : (
      <CardActions>
        <Button size="small" color="primary">
          View
        </Button>
      </CardActions>
    );
  };

  return (
    <Card className={classes.card}>
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
      {renderButtons()}
    </Card>
  );
};

export default DashbordItem;
