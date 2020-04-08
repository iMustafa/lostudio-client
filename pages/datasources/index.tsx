import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Cookies from 'next-cookies'
import { NextPage } from 'next';
import DatasourceActions from '../../actions/datasource.actions'
import Datasource from '../../types/datasource.types';
import AddDataSource from '../../components/datasources/AddDatasource'
import ListDatasource from '../../components/datasources/ListDatasources'
import Grid from '@material-ui/core/Grid'
import SideMenu from '../../components/SideMenu'

const useStyles = makeStyles(theme => ({

}));

const Datasources: NextPage<Array<Datasource>> = (Datasources: Array<Datasource>) => {
  const classes = useStyles()

  const renderDatasource = () => Object.values(Datasources).map(datasource => {

  })

  return (
    <Grid container spacing={2}>
      <Grid item xs={2} style={{ position: 'relative' }}>
        <SideMenu />
      </Grid>
      <Grid item xs={10}>
        <div className={'container'} style={{ margin: "25px auto 0 auto" }}>
          <AddDataSource />
          <ListDatasource datasources={Datasources} />
        </div>
      </Grid>
    </Grid>
  )
}

Datasources.getInitialProps = async (req): Promise<Array<Datasource>> => {
  try {
    const Authorization = Cookies(req).id
    const Datasources = await DatasourceActions.getDatasources({ Authorization })
    return Datasources
  } catch (e) {
    return []
  }
}

export default Datasources