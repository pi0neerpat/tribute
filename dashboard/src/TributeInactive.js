import React from 'react';
import { Grid, Button, Typography, Card } from '@material-ui/core';

import calm from './assets/calm.png';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
const BigNumber = require('bignumber.js');

export default function TributeInactive({ services }) {
  function convertToFixed(number) {
    return new BigNumber(number).toFixed(2);
  }

  console.log(services);

  let inactives = services
    .filter(item => {
      return item.status == false;
    })
    .map((item, i) => {
      return (
        <TableRow key={i}>
          <TableCell component="th" scope="row">
            {item.name}
          </TableCell>
          <TableCell scope="row">
            <a href={`kovan.etherscan.com/${item.address}`} target="_blank">
              {item.address.substring(0, 6)}...
            </a>
          </TableCell>
          <TableCell align="right">
            {convertToFixed(item.tributeRequired)} DAI
          </TableCell>
        </TableRow>
      );
    });

  return (
    <div>
      <br />
      <br />
      <br />
      <div style={{ display: 'flex' }}>
        <img src={calm} width={80} />
        <Typography style={{ margin: '10px 0 0 10px' }} variant="h4">
          Inactive Tributes
        </Typography>
      </div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Publisher</TableCell>
            <TableCell>Address</TableCell>
            <TableCell align="right">Tribute Required</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{inactives}</TableBody>
      </Table>
    </div>
  );
}
