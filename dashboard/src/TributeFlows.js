import React from 'react';
import { Grid, Button, Typography, Card } from '@material-ui/core';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import flowing from './assets/flowing.png';
const BigNumber = require('bignumber.js');

export default function TributeFlows({ principal, hats, services }) {
  let bigPrincipal = new BigNumber(principal.toString());
  let normPrincipal = bigPrincipal.dividedBy(Math.pow(10, 18)).toFixed(2);

  let sum = 0;
  hats.proportions.forEach(item => {
    console.log(item);
    sum += item;
  });

  function computeNormPortion(proportion) {
    let allocatedStr = ((proportion / sum) * normPrincipal).toString();
    let allocated = new BigNumber(allocatedStr).toFixed(2);
    return allocated;
  }

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
      <div style={{ display: 'flex' }}>
        <img src={flowing} width={80} />
        <Typography style={{ margin: '10px 0 0 10px' }} variant="h4">
          Tribute Flows
        </Typography>
      </div>
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
                    {hat.substring(0, 6)}..
                  </a>
                </TableCell>
                <TableCell align="right">
                  {computeNormPortion(hats.proportions[index])} DAI
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
