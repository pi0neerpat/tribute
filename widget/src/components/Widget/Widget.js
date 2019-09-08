import React, { useContext } from 'react';
import Layout from '../Layout';
import PromptArea from '../PromptArea';
import Report from '../Report';
import { Button } from '@material-ui/core';

const Widget = ({ dappAddress, account, hat }) => {
  const prompt = 'To access';
  const providerName = 'Super Marzio';
  const principal = 500;
  const tributeRequired = 100;
  const flowTotal = 0;
  const isTributeFlowing = false;

  const startTribute = () => {
    //start tribute
  };

  const endTribute = () => {
    //end tribute
  };

  const getButton = () => {
    let action = startTribute();
    let text = 'Allocate';
    if (isTributeFlowing) {
      action = endTribute();
      text = 'End Tribute';
    }
    return (
      <Button variant="contained" color="primary" onClick={action}>
        {text}
      </Button>
    );
  };

  return (
    <div>
      <Layout>
        <PromptArea
          providerName={providerName}
          principal={principal}
          tributeRequired={tributeRequired}
          isTributeFlowing={isTributeFlowing}
        />
        {getButton()}
        <Report flowTotal={flowTotal} providerName={providerName} />
      </Layout>
    </div>
  );
};
export default Widget;
