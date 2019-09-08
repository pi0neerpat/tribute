import React, { useContext, useState } from 'react';
import Layout from '../Layout';
import PromptArea from '../PromptArea';
import Report from '../Report';
import { ethers } from 'ethers';
import { Button } from '@material-ui/core';

const Widget = ({ dappAddress, rDAIAddress, rDAIContractAbi, account, hat, provider, tributeFlowing, setTributeFlowing }) => {
  const prompt = 'To access';
  const providerName = 'Super Marzio';
  const principal = 500;
  const tributeRequired = 100;
  const flowTotal = 0;

  let signer = provider.getSigner()
  let contract = new ethers.Contract(rDAIAddress, rDAIContractAbi, signer);

  async function toggleTribute() {

    console.log(contract)

    if(tributeFlowing) {
      //19 is unallocated
      let tx = contract.changeHat(19)
      tx = await signer.sendTransaction(tx)
    } else {
      //18 is allocated
      let tx = contract.changeHat(18)
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
          principal={principal}
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
