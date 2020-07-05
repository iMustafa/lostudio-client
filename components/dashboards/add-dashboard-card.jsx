import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FormGroup from "@material-ui/core/FormGroup";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import DashboardActions from "../../actions/dashboard.actions";

const useStyles = makeStyles((theme) => ({
  card: {
    height: 280,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingTop: 15,
  },
  media: {
    height: 140,
  },
  title: {
    textAlign: "center",
    textTransform: "uppercase",
    color: "#3F51B5",
  },
}));

const AddDashboardCard = ({ type, reloadChanges }) => {
  const classes = useStyles();
  const [state, setState] = useState({
    title: "",
    type,
    description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const createProject = async () => {
    if (state.title) {
      try {
        const { title, description, type } = state;
        const project = await DashboardActions.createDashboard({
          dashboard: { title, description, type },
        });
        setState({...state, title: '', description: ''})
        reloadChanges()
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <Card className={classes.card}>
      <Typography className={classes.title}>Create new project</Typography>

      <CardContent>
        <TextField
          fullWidth
          required
          name="title"
          label="Title"
          onChange={handleChange}
          value={state.title}
        />
        <TextField
          fullWidth
          multiline
          name="description"
          label="Description"
          onChange={handleChange}
          value={state.description}
        />
      </CardContent>

      <CardActions>
        <Button fullWidth color="primary" onClick={createProject}>
          Create
        </Button>
      </CardActions>
    </Card>
  );
};

export default AddDashboardCard;
