import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}))

const AccordionWidget = ({ widgetId }) => {
  const classes = useStyles()
  const [expanded, setExpanded] = useState(false)
  const [widget, setWidget] = useState(null)
  const [menuState, setMenuState] = useState({ right: false })

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const $widget = await WidgetSettingsActions.getWidgetSettingsById(widgetId)
        setWidget($widget)
        return $widget
      } catch (e) {
        console.log(e)
      }
    }
    getData()
  }, [])

  const expansionPanelItem = ({ id, title, description, innerHTML, text }) => {
    return (
      <ExpansionPanel expanded={expanded === id} onChange={handleChange(id)}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>{title}</Typography>
          <Typography className={classes.secondaryHeading}>{description}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            {text}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }

  return (
    <div className={classes.root}>
      {expansionPanelItem({
        id: 1,
        title: 'Test',
        description: 'Description',
        text: "Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue."
      })}
    </div>
  )
}

export default AccordionWidget