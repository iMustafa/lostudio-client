import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NextPage } from 'next';
import Router from 'next/router'
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';
import BusinessIcon from '@material-ui/icons/Business';
import PersonalSignUp from '../components/signup/personal'
import BusinessSignUp from '../components/signup/business'

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '80vh',
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginCard: {
    padding: '30px 15px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  headerHolder: {
    borderRight: '1px solid #DEDEDE'
  },
  loginHolder: {
    textAlign: 'center',
    marginTop: theme.spacing(3)
  },
  loginText: {
    marginRight: theme.spacing(2)
  }
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const SignupPage: NextPage<{}> = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderLeftSection = () => {
    if (value == 0)
      return (
        <div>Personal Account</div>
      )

    return (
      <div>
        Business Account
      </div>
    )
  }

  return (
    <Grid container spacing={2} className={classes.root}>
      <Grid item md={9} xs={10}>
        <Card className={classes.loginCard}>

          <Grid container>
            <Grid item md={5} className={classes.headerHolder}>
              {renderLeftSection()}
            </Grid>

            <Grid item md={7}>

              <AppBar position="static" style={{ backgroundColor: "transparent" }}>
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                  <Tab label="Personal Account" icon={<PersonIcon />} {...a11yProps(0)} style={{ color: "#333" }} />
                  <Tab label="Business Account" icon={<BusinessIcon />} {...a11yProps(1)} style={{ color: "#333" }} />
                </Tabs>

              </AppBar>
              <TabPanel value={value} index={0}>
                <PersonalSignUp />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <BusinessSignUp />
              </TabPanel>

            </Grid>
          </Grid>
        </Card>

        <Box className={classes.loginHolder}>
          <span className={classes.loginText}>Already have an account?</span>
          <Button onClick={() => { Router.push('/login') }}>Login</Button>
        </Box>

      </Grid>
    </Grid>
  )
}

export default SignupPage;