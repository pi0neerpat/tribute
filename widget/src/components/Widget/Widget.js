import React, { useContext, useState } from 'react';
import Layout from '../Layout';
import PromptArea from '../PromptArea';
import Report from '../Report';
import { ethers } from 'ethers';
import { Button } from '@material-ui/core';
const BigNumber = require('bignumber.js');

const Widget = ({ dappAddress, rDAIAddress, rDAIContractAbi, account, hat, provider, tributeFlowing, setTributeFlowing, principal }) => {
  const prompt = 'To access';
  const providerName = 'Super Marzio';
  const tributeRequired = 876;
  const flowTotal = 0;

  let signer = provider.getSigner()
  let contract = new ethers.Contract(rDAIAddress, rDAIContractAbi, signer);

  let bigPrincipal = new BigNumber(principal.toString());
  let normP = bigPrincipal.dividedBy(Math.pow(10, 18)).toFixed(2)
  console.log(normP)

  async function toggleTribute() {

    if(tributeFlowing) {
      //19 is unallocated
      let tx = contract.changeHat(13)
      tx = await signer.sendTransaction(tx)
    } else {
      //18 is allocated
      let tx = contract.changeHat(21)
      tx = await signer.sendTransaction(tx)
    }
    //tribute flowing is now off, turn it off
    console.log(!tributeFlowing)
    setTributeFlowing(!tributeFlowing)
  };

  return (
    <div style={{ width: 300 }}>
      <Layout>
        <PromptArea
          providerName={providerName}
          principal={normP}
          tributeRequired={tributeRequired}
          isTributeFlowing={tributeFlowing}
        />
        <Button size="large" variant="contained" color="primary" onClick={toggleTribute}>
          { tributeFlowing ? "End Tribute" : "Allocate Tribute" }
        </Button>
        <Report flowTotal={flowTotal} providerName={providerName} />
      </Layout>
    </div>
  );
};
export default Widget;
