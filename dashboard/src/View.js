import React, { useState, useEffect, useContext } from 'react';
import { EthersContext } from './EthersContext.js';
import { ethers } from 'ethers';
import rDAIContract from './contracts/rDAI.abi.json'

function View() {
  const [ethersContext, setEthersContext] = useContext(EthersContext);
  const [selectedAddress, setSelectedAddress] = useState();
  const rDAIAddress = "0xeA718E4602125407fAfcb721b7D760aD9652dfe7";

  // Detect when account changes
  window.ethereum.on('accountsChanged', function (accounts) {
    if (selectedAddress !== undefined) {
      setSelectedAddress(accounts[0])
    }
  })

  // Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    if (typeof window.ethereum !== 'undefined'
      || (typeof window.web3 !== 'undefined')) {
      console.log(window.web3.version);
      // Web3 browser user detected. You can now use the provider.
      let provider = window['ethereum'] || window.web3.currentProvider
      //NOTE: must wrap window.etherm to get provider, not window.web3
      provider = new ethers.providers.Web3Provider(window.ethereum);
      let contract = new ethers.Contract(rDAIAddress, rDAIContract, provider);
      if (ethersContext.contract === undefined) {
        setEthersContext(state => ({ ...ethersContext, contract }));
      }
    }
  }, [ethersContext]);

  async function getAccount() {
    try {
      if (selectedAddress === undefined) {
        console.log("No selected address, requesting log in")
        let account = await window.ethereum.enable();
        console.log("Selected Address is: " + account[0])
        setSelectedAddress(account[0]);
      } else {
        console.log("Selected Address is: " + selectedAddress);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function getHatByAddress() {
    if (ethersContext.contract !== undefined) {
      let hat = await ethersContext.contract.getHatByAddress(selectedAddress);
      console.log(hat);
    }
  }

  getAccount();

  return (
    <div>
      hello
    </div>
  );
}

export default View;
