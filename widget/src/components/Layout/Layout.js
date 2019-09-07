import React from 'react';
import { Button, Grid, Card, Heading } from '@material-ui/core'

const providerName = "Mario Broskis"

const Layout = (props) => (
  <div >

  <Grid container direction="column" alignContent="center" alignItems="center">
  <Grid item>
  <img src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.PVvu1ux2h5u4ExuJ_903kQHaEK%26pid%3DApi&f=1" width={200}/> Tribute
  </Grid>
  {props.children}
</Grid>
  </div>
);

export default Layout;
