import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import DashboardActions from '../../../actions/dashboard.actions'
import CollaboratorCard from './collaborator-card'
import AddCollaboratorCard from './add-new-collaborator'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(() => ({
  h2: {
    width: '100%',
    textAlign: 'center',
    borderBottom: '1px solid #000',
    lineHeight: '0.1em',
    marginTop: "20px",
    marginBottom: "20px",
    fontFamily: 'Roboto',
    fontSize: '13px',
    color: "#3F51B5"
  },
  span: {
    background: '#fff',
    padding: '0 10px'
  }
}))

const PrivacySettings = ({ id }) => {
  const classes = useStyles()
  const [collaborators, setCollaborators] = useState([])
  const [isAddingCollaborator, setIsAddingCollaborator] = useState(false)

  useEffect(() => {
    const getInitialProps = async () => {
      try {
        const $collaborators = await DashboardActions.getCollaborators({ id })
        setCollaborators($collaborators)
      } catch (e) {
        console.log(e)
      }
    }
    getInitialProps()
  }, [])

  const renderButtonOrAdd = () => {
    return isAddingCollaborator ? <AddCollaboratorCard id={id} cancel={() => setIsAddingCollaborator(false)} /> :
      <Button fullWidth style={{ marginBottom: 10, outline: 'none' }} onClick={() => setIsAddingCollaborator(true)}>Add New Collaborator</Button>
  }

  return (
    <div>
      <h2 className={classes.h2}>
        <span className={classes.span}>Collaborators</span>
      </h2>
      <div>
        {renderButtonOrAdd()}
        {collaborators.map(collaborator => <CollaboratorCard key={collaborator.id} collaborator={collaborator} />)}
      </div>
    </div>
  )
}

export default PrivacySettings