import React from 'react';
import { Button, Grid, Typography, Divider } from '@material-ui/core';

import { Dashboard } from '@material-ui/icons';

import github from '../../assets/github.png';
import urn from '../../assets/urn.png';
import urnFull from '../../assets/urn-full.png';

const Layout = props => (
  <div>
    <Grid
      container
      direction="column"
      alignContent="center"
      alignItems="center"
    >
      <Grid item>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={urn} width={30} style={{ margin: 10 }} />{' '}
          <Typography variant="h4">Tribute</Typography>
        </div>
      </Grid>
      {props.children}
      <Grid item>
        <Divider style={{ margin: '30px 0 10px 0' }} />
        <Button
          size="small"
          onClick={() => {
            window.open('https://tribute-dash.surge.sh');
          }}
          style={{ marginRight: 10 }}
          variant="contained"
        >
          <Dashboard style={{ paddingRight: 5 }} />
          Dashboard
        </Button>
        <Button
          size="small"
          variant="contained"
          onClick={() => {
            window.open('https://github.com/pi0neerpat/tribute');
          }}
        >
          <img src={github} width={20} style={{ paddingRight: 4 }} /> Github
        </Button>
      </Grid>
      <p>
        Tribute -{' '}
        <a href="https://t.me/tributemoney" target="_blank">
          support
        </a>
      </p>
    </Grid>
  </div>
);

export default Layout;
