import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NextPage } from 'next';
import Router from 'next/router'
import Swal from 'sweetalert2'
import Cookies from 'js-cookie'
import { Card, Box } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';
import { login, saveLoginData } from '../actions/auth.actions';
import { LoginResponse } from '../types/auth.types';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '80vh',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInput: {
    margin: theme.spacing(2),
    width: '40%',
  },
  loginCard: {
    padding: '30px 15px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    minHeight: '35vh'
  },
  loginButton: {
    border: '1px solid #DEDEDE',
    width: '45%'
  },
  buttonHolder: {
    display: 'flex',
    width: '90%',
    justifyContent: 'center',
    borderBottom: '1px solid #DEDEDE',
    paddingBottom: theme.spacing(4)
  },
  forgetPassword: {
    fontSize: '13px',
    color: '#333',
    alignSelf: 'flex-start',
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(5),
    cursor: 'pointer'
  },
  signupHolder: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  },
  signupText: {
    color: '#333',
    position: 'relative',
    top: '6px'
  },
  signupButton: {
    marginLeft: theme.spacing(4),
    border: '1px solid #DEDEDE',
    width: '20%'
  }
}));

const LoginPage: NextPage<{}> = () => {
  const classes = useStyles();
  const [data, setData] = useState({ password: '', email: '' });
  const [invalidPasswordCount, setInvalidPasswordCount] = useState(0)

  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const submitLogin = async () => {
    try {
      const loginInfo: LoginResponse = await login(data)
      saveLoginData(loginInfo)
      Router.push('/')
    } catch (e) {
      switch (e.status) {
        case 401:
          setInvalidPasswordCount(invalidPasswordCount + 1)
          if (invalidPasswordCount >= 3) {
            Swal
              .fire({
                title: e.statusText,
                text: 'Did you forget your email/password?',
                icon: 'error',
                showCancelButton: true,
                confirmButtonText: 'Reset password',
                cancelButtonText: 'Close'
              })
              .then(result => {
                if (result.value)
                  Router.push('/reset-password')
              })
          } else {
            Swal.fire(e.statusText, "Invalid email/password combination.", 'error')
          }
          break
      }
    }
  }

  return (
    <Grid
      container
      spacing={2}
      className={classes.root}
    >
      <Grid item md={6} xs={10}>
        <Card className={classes.loginCard}>

          <FormControl className={classes.textInput}>
            <InputLabel htmlFor="input-with-icon-adornment">Email</InputLabel>
            <Input
              name="email"
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
              type={'email'}
              onChange={handleChange}
              required
            />
          </FormControl>

          <FormControl className={classes.textInput}>
            <InputLabel htmlFor="input-with-icon-adornment">Password</InputLabel>
            <Input
              name="password"
              startAdornment={
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              }
              onChange={handleChange}
              type={'password'}
              required
            />
          </FormControl>

          <Box className={classes.buttonHolder}>
            <Button className={classes.loginButton} onClick={submitLogin}>Login</Button>
          </Box>

          <Box className={classes.forgetPassword} onClick={() => { Router.push('/reset-password') }}>
            Did you forget your username/password?
          </Box>

        </Card>

        <Box className={classes.signupHolder}>
          <span className={classes.signupText}>New Customer Signup.</span>
          <Button className={classes.signupButton} onClick={() => { Router.push('/signup') }}>Signup</Button>
        </Box>

      </Grid>
    </Grid>
  )
};

export default LoginPage;