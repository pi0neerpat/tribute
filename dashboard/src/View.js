import React, { useState, useEffect, useContext } from 'react';
import { EthersContext } from './EthersContext.js';
import { ethers } from 'ethers';
import TributeTotals from './TributeTotals';
import TributeFlows from './TributeFlows';
import TributeInactive from './TributeInactive';
//import AdminTools from './AdminTools';
import rDAIContract from './contracts/rDAI.abi.json';

import { Button, Typography, Grid, Divider } from '@material-ui/core';

import github from './assets/github.png';
import urn from './assets/urn.png';
import urnFull from './assets/urn-full.png';

function View() {
  const [ethersContext, setEthersContext] = useContext(EthersContext);
  const [selectedAddress, setSelectedAddress] = useState();
  const rDAIAddress = '0xeA718E4602125407fAfcb721b7D760aD9652dfe7';
  let services = [
    {
      name: 'Super Mariano',
      address: '0x2243cE6fE34ca1e457c5f174be3eCdf8Ae08516f',
      status: false,
      tributeRequired: 876
    },
    {
      name: 'Dev Tool Suite',
      address: '0xe179269981E841129e07623720f32f55FF0AF9AB',
      status: false,
      tributeRequired: 521
    },
    {
      name: 'Times newspaper',
      address: '0xafbd',
      status: false,
      tributeRequired: 200
    },
    {
      name: 'Audio Books Galore',
      address: '0x7dfa2',
      status: false,
      tributeRequired: 164
    }
  ];

  // Detect when account changes
  window.ethereum.on('accountsChanged', function(accounts) {
    if (selectedAddress !== undefined) {
      setSelectedAddress(accounts[0]);
    }
  });

  // Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    if (
      typeof window.ethereum !== 'undefined' ||
      typeof window.web3 !== 'undefined'
    ) {
      console.log(window.web3.version);
      // Web3 browser user detected. You can now use the provider.
      let provider = window['ethereum'] || window.web3.currentProvider;
      //NOTE: must wrap window.etherm to get provider, not window.web3
      provider = new ethers.providers.Web3Provider(window.ethereum);
      let contract = new ethers.Contract(rDAIAddress, rDAIContract, provider);
      if (ethersContext.contract === undefined) {
        setEthersContext(state => ({ ...ethersContext, contract }));
      }
      getAccount();
    }
  }, []);

  const [interest, setInterest] = useState();
  const [allocated, setAllocated] = useState();
  const [balance, setBalance] = useState();
  const [hats, setHats] = useState();
  useEffect(
    () => {
      if (selectedAddress !== undefined) {
        getAllocatedTribute();
        getBalanceOf();
        getAccruedInterest();
      }
    },
    [selectedAddress]
  );

  async function getAccount() {
    try {
      if (selectedAddress === undefined) {
        console.log('No selected address, requesting log in');
        let account = await window.ethereum.enable();
        console.log('Selected Address is: ' + account[0]);
        setSelectedAddress(account[0]);
      } else {
        console.log('Selected Address is: ' + selectedAddress);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function getBalanceOf() {
    if (ethersContext.contract !== undefined) {
      let principal = await ethersContext.contract.balanceOf(selectedAddress);
      setBalance(principal);
      console.log("principal: " + principal)
    }
  }

  async function getAccruedInterest() {
    if (ethersContext.contract !== undefined) {
      let interest = await ethersContext.contract.interestPayableOf(selectedAddress);
      setInterest(interest);
      console.log("accrued interest: " + interest)
    }
  }

  async function getAllocatedTribute() {
    let hats = await ethersContext.contract.getHatByAddress(selectedAddress);
    setHats(hats);
    let allocated = 0;
    setAllocated(allocated);
    if (hats !== undefined) {
      allocated = hats.proportions[0];
      setAllocated(allocated);
    }
    console.log("allocated: " + allocated)
  }

  function renderTributeTotals() {
    return (
      <TributeTotals principal={balance} hats={hats} allocated={allocated} interest={interest}/>
    );
  }

  function renderFlows() {
    return <TributeFlows principal={balance} hats={hats} services={services} />;
  }

  return (
    <div>
      <Grid container direction="column" alignContent="center">
        <Grid item>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={urn} width={45} style={{ margin: 10 }} />{' '}
            <Typography variant="h3">Tribute</Typography>
          </div>
        </Grid>
        {balance !== undefined &&
          allocated !== undefined &&
          renderTributeTotals()}
        {balance !== undefined && hats !== undefined && renderFlows()}
        <TributeInactive services={services} />
        <div style={{ display: 'flex', alignContent: 'center' }}>
          <Typography style={{ margin: '10px 0 0 10px' }} variant="h6">
            <br />
            Admin Tools
          </Typography>
          <Button
            style={{ marginTop: 50, height: 30 }}
            variant="contained"
            size="small"
          >
            Move Accrued Interest to Principal
          </Button>
        </div>
        <Button
          size="small"
          variant="contained"
          style={{ width: 100, marginTop: 30 }}
          onClick={() => {
            window.open('https://github.com/pi0neerpat/tribute');
          }}
        >
          <img src={github} width={20} style={{ paddingRight: 4 }} /> Github
        </Button>
        <p>
          Tribute -{' '}
          <a href="https://t.me/tributemoney" target="_blank">
            support
          </a>
        </p>
      </Grid>
    </div>
  );
}

export default View;
