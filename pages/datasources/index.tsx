import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Cookies from 'next-cookies'
import { NextPage } from 'next';
import Router from 'next/router'
import Swal from 'sweetalert2'
import DatasourceActions from '../../actions/datasource.actions'
import Datasource from '../../types/datasource.types';

const useStyles = makeStyles(theme => ({

}));

const Datasources: NextPage<Array<Datasource>> = (Datasources: Array<Datasource>) => {
  const classes = useStyles()
  
  const renderDatasource = () => Object.values(Datasources).map(datasource => {
    
  })

  return (
    <div>
      <h1>Datasources works</h1>
    </div>
  )
}

Datasources.getInitialProps = async (req): Promise<Array<Datasource>> => {
  try {
    const Authorization = Cookies(req).id
    const Datasources = await DatasourceActions.getDatasources({ Authorization })
    return Datasources
  } catch (e) {
    console.log(e)
    return []
  }
}

export default Datasources