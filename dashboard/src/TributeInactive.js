import React from 'react';
import { Grid, Button, Typography, Card } from '@material-ui/core';

import calm from './assets/calm.png';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export default function TributeInactive({ services }) {
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
          <TableCell align="right">{item.tributeRequired} DAI</TableCell>
        </TableRow>
      );
    });

  return (
    <div>
      <br />
      <br />
      <br />
      <Typography variant="h4">
        <img src={calm} width={80} />
        Inactive Tributes
      </Typography>

      <Table>
        <TableBody>{inactives}</TableBody>
      </Table>
    </div>
  );
}
