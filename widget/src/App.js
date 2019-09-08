import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

import urnFull from './assets/urn-full.png';
import urn from './assets/urn.png';
import web3 from './ethereum/web3';
import rDAIContract from './contracts/rDAI.abi.json';
import Widget from './components/Widget';
import { Button, Popover, Typography } from '@material-ui/core';

function App() {
  const [ethersState, setEthersState] = useState({
    selectedAddress: ''
  });
  const RDAI_ADDRESS = '0xeA718E4602125407fAfcb721b7D760aD9652dfe7';
  const DAPP_ADDRESS = '0x1EEEe046f7722b0C7F04eCc457Dc5CF69f4fbA99';
  const isTributeFlowing = true;

  async function getAccount() {
    try {
      if (ethersState.selectedAddress === undefined) {
        console.log('No selected address, requesting log in');
        let account = await window.ethereum.enable();
        console.log('Selected Address is: ' + account[0]);
        setEthersState({
          ...ethersState,
          selectedAddress: account[0]
        });
      } else {
        console.log('Selected Address is: ' + ethersState.selectedAddress);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function getHatByAddress() {
    if (
      typeof window.ethereum !== 'undefined' ||
      typeof window.web3 !== 'undefined'
    ) {
      console.log(window.web3.version);
      // Web3 browser user detected. You can now use the provider.
      let provider = window['ethereum'] || window.web3.currentProvider;
      //NOTE: must wrap window.etherm to get provider, not window.web3
      provider = new ethers.providers.Web3Provider(window.ethereum);
      let contract = new ethers.Contract(RDAI_ADDRESS, rDAIContract, provider);

      let hat = await contract.getHatByAddress(ethersState.selectedAddress);
      console.log(hat);
      setEthersState({
        ...ethersState,
        hat: hat
      });
    }
  }
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    getHatByAddress();
    getAccount();
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div className="App">
      <Button
        size="large"
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
      >
        <img
          src={isTributeFlowing ? urnFull : urn}
          width={20}
          style={{ paddingRight: 5 }}
        />{' '}
        Tribute
      </Button>
      <Popover
        id={id}
        // open={true}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
      >
        <Widget
          hat={ethersState.hat}
          dappAddress={DAPP_ADDRESS}
          account={ethersState.selectedAddress}
        />
      </Popover>
    </div>
  );
}

export default App;
