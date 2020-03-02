import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import ApplicationMainBar from '../components/ApplicationMainBar';
import { ThemeProvider } from 'styled-components'
import cookies from 'next-cookies'
import redirectTo from '../components/redirectTo'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'

const theme = {
  primary: 'green'
}

export default class LoStudio extends App {

  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}
    const c = cookies(ctx)

    if (Component.getInitialProps)
      pageProps = await Component.getInitialProps(ctx)

    if (typeof c.id == 'undefined') {
      if (ctx.pathname == "/login" || ctx.pathname == "/forgot-password") return { pageProps }
      else redirectTo('/login', { res: ctx.res, status: 301 })
    } else {
      // SHOULD CHECK FOR AUTH TOKEN VALIDITY
      if (ctx.pathname == "/") {
        redirectTo('/dashboards', { res: ctx.res, status: 301 })
      }
    }

    return { pageProps }
  }

  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles)
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <Head>
          <title>LoStudio</title>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossOrigin="anonymous"
          />
        </Head>
        <ApplicationMainBar></ApplicationMainBar>
        <Component {...pageProps} />
      </ThemeProvider >
    );
  }
}