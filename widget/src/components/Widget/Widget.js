import React, { useContext, useState } from 'react';
import Layout from '../Layout';
import PromptArea from '../PromptArea';
import Report from '../Report';
import { ethers } from 'ethers';
import { Button } from '@material-ui/core';

const Widget = ({ dappAddress, rDAIAddress, rDAIContractAbi, account, hat, provider }) => {
  const prompt = 'To access';
  const providerName = 'Super Marzio';
  const principal = 500;
  const tributeRequired = 100;
  const flowTotal = 0;
  const [stateFlowing, setStateFlowing] = useState(false);

  let contract = new ethers.Contract(rDAIAddress, rDAIContractAbi, provider);

  async function toggleTribute() {

    console.log(contract)

    if(stateFlowing) {
      //18 is allocated
      await contract.changeHat(18)
    } else {
      //19 is unallocated
      await contract.changeHat(19)
    }
    setStateFlowing(!stateFlowing)
    console.log(stateFlowing)
  };

  return (
    <div style={{ width: 300 }}>
      <Layout>
        <PromptArea
          providerName={providerName}
          principal={principal}
          tributeRequired={tributeRequired}
          isTributeFlowing={stateFlowing}
        />
        <Button size="large" variant="contained" color="primary" onClick={toggleTribute}>
          { stateFlowing ? "End Tribute" : "Allocate Tribute" }
        </Button>
        <Report flowTotal={flowTotal} providerName={providerName} />
      </Layout>
    </div>
  );
};
export default Widget;
