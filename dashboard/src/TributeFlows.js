import React from 'react';
import { Grid, Button, Typography, Card } from '@material-ui/core';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import flowing from './assets/flowing.png';

export default function TributeFlows({ hats, services }) {
  const getHatName = address => {
    let name = 'unknown';
    services.forEach(service => {
      if (address === service.address) {
        name = service.name;
      }
    });

    return name;
  };
  console.log(hats);
  return (
    <div>
      <br />
      <br />

      <Typography variant="h4">
        <img src={flowing} width={80} />
        Tribute Flows
      </Typography>

      <Table>
        <TableBody>
          {hats.recipients.map((hat, index) => {
            if (index === 0) return;
            return (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {getHatName(hat)}
                </TableCell>
                <TableCell scope="row">
                  <a href={`kovan.etherscan.com/${hat}`} target="_blank">
                    {hat.substring(0, 6)}...
                  </a>
                </TableCell>
                <TableCell align="right">
                  {hats.proportions[index]} DAI
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
