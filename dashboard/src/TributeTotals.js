import React from 'react';
import { Grid, Button, Typography, Card } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import urn from './assets/urn.png';
import wallet from './assets/wallet.png';

export default function TributeTotals({ principal, allocated }) {
  return (
    <div style={{ marginTop: 30 }}>
      <Grid container direction="row" alignContent="center" alignItems="center">
        <Grid item style={{ marginRight: 20 }}>
          <Card>
            <div>
              <CardContent>
                <Grid container direction="row">
                  <Grid item>
                    <img
                      src={wallet}
                      width={30}
                      style={{ padding: '10px 10px 0 0 ' }}
                    />
                  </Grid>
                  <Grid item>
                    <Typography component="h5" variant="h5">
                      {principal.toString()} DAI
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      Principal
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </div>
          </Card>
        </Grid>
        <Card>
          <div>
            <CardContent>
              <Grid container direction="row">
                <Grid item>
                  <img
                    src={urn}
                    width={30}
                    style={{ padding: '10px 10px 0 0 ' }}
                  />
                </Grid>
                <Grid item>
                  <Typography component="h5" variant="h5">
                    {allocated.toString()} DAI
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Allocated Tribute
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </div>
        </Card>
      </Grid>
    </div>
  );
}
