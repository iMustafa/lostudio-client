import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NextPage } from 'next';
import Router from 'next/router'
import Swal from 'sweetalert2'
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import { register } from '../actions/auth.actions';
import countries from '../helpers/countries'
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';

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
  formHolder: {

  },
  textField: {
    width: '90%'
  },
  fieldsGrid: {
    marginTop: theme.spacing(4)
  },
  signupButtonHolder: {
    display: 'flex',
    marginTop: theme.spacing(4),
    justifyContent: 'center'
  },
  signupButton: {
    width: '50%'
  },
  loginHolder: {
    textAlign: 'center',
    marginTop: theme.spacing(3)
  },
  loginText: {
    marginRight: theme.spacing(2)
  },
  loginButton: {
  }
}));

function countryToFlag(isoCode) {
  return typeof String.fromCodePoint !== 'undefined'
    ? isoCode.toUpperCase().replace(/./g, char => String.fromCodePoint(char.charCodeAt(0) + 127397))
    : isoCode;
}

const SignupPage: NextPage<{}> = () => {
  const classes = useStyles();
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '',
    phoneNumber: '',
    country: '',
    city: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const submitSignup = async () => {
    try {
      const user = await register(data)
      console.log(user)
    } catch (e) {
      switch (e.status) {
        case 422:
          Swal.fire('Error', 'Email already exists', 'error')
          break
      }
    }
  }

  return (
    <Grid container spacing={2} className={classes.root}>
      <Grid item md={9} xs={10}>
        <Card className={classes.loginCard}>

          <Grid container>
            <Grid item md={5} className={classes.headerHolder}>

            </Grid>

            <Grid item md={7} className={classes.formHolder}>

              <Grid container>
                <Grid item md={6} xs={12} style={{ textAlign: 'center' }}>
                  <FormControl className={classes.textField}>
                    <TextField
                      name="firstName"
                      label={'First Name'}
                      required
                      onChange={handleChange}
                      value={data.firstName}
                    />
                  </FormControl>
                </Grid>

                <Grid item md={6} xs={12} style={{ textAlign: 'center' }}>
                  <FormControl className={classes.textField}>
                    <TextField
                      name="lastName"
                      label={'Last Name'}
                      required
                      onChange={handleChange}
                      value={data.lastName}
                    />
                  </FormControl>
                </Grid>
              </Grid>

              <Grid container className={classes.fieldsGrid}>
                <Grid item md={6} xs={12} style={{ textAlign: 'center' }}>
                  <FormControl className={classes.textField}>
                    <TextField
                      name="email"
                      label={'Email'}
                      type={'email'}
                      required
                      onChange={handleChange}
                      value={data.email}
                    />
                  </FormControl>
                </Grid>

                <Grid item md={6} xs={12} style={{ textAlign: 'center' }}>
                  <Grid container spacing={1}>
                    <Grid item xs={4}>
                      <Autocomplete
                        options={countries}
                        getOptionLabel={option => `+${option.phone}`}
                        renderOption={option => (
                          <React.Fragment>
                            <span>{countryToFlag(option.code)}</span>
                            <span style={{ fontSize: '10px' }}>+{option.phone}</span>
                          </React.Fragment>
                        )}
                        renderInput={params => (
                          <TextField {...params} name={'countryCode'} label="Country Code" />
                        )}
                      />
                    </Grid>
                    <Grid item xs={8}>
                      <FormControl className={classes.textField}>
                        <TextField
                          name="phoneNumber"
                          label={'Phone Number'}
                          onChange={handleChange}
                          value={data.phoneNumber}
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Grid container className={classes.fieldsGrid}>
                <Grid item md={6} xs={12} style={{ textAlign: 'center' }}>
                  <FormControl className={classes.textField}>
                    <Autocomplete
                      options={countries}
                      getOptionLabel={option => option.label}
                      renderInput={params => (
                        <TextField {...params} name={'country'} label="Country" fullWidth required />
                      )}
                    />
                  </FormControl>
                </Grid>

                <Grid item md={6} xs={12} style={{ textAlign: 'center' }}>
                  <FormControl className={classes.textField}>
                    <TextField
                      name="city"
                      label={'City'}
                      required
                      onChange={handleChange}
                      value={data.city}
                    />
                  </FormControl>
                </Grid>
              </Grid>

              <Grid container className={classes.fieldsGrid}>
                <Grid item md={6} xs={12} style={{ textAlign: 'center' }}>
                  <FormControl className={classes.textField}>
                    <TextField
                      name="password"
                      label={'Password'}
                      required
                      onChange={handleChange}
                      value={data.password}
                      type={'password'}
                    />
                  </FormControl>
                </Grid>

                <Grid item md={6} xs={12} style={{ textAlign: 'center' }}>
                  <FormControl className={classes.textField}>
                    <TextField
                      name="confirmPassword"
                      label={'Confirm Password'}
                      required
                      onChange={handleChange}
                      value={data.confirmPassword}
                      type={'password'}
                    />
                  </FormControl>
                </Grid>
              </Grid>

              <Grid item xs={12} className={classes.signupButtonHolder}>
                <Button className={classes.signupButton} onClick={submitSignup}>Signup</Button>
              </Grid>

            </Grid>
          </Grid>
        </Card>

        <Box className={classes.loginHolder}>
          <span className={classes.loginText}>Already have an account?</span>
          <Button className={classes.loginButton} onClick={() => { Router.push('/login') }}>Login</Button>
        </Box>

      </Grid>
    </Grid>
  )
}

export default SignupPage;