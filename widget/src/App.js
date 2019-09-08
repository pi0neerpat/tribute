import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import PromptArea from './components/PromptArea';
import Report from './components/Report';

import { Button } from '@material-ui/core';

function App() {
  const prompt = 'To access';
  const providerName = 'Mario Broskis';
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
    <div className="App">
      <Layout>
        <PromptArea
          providerName={providerName}
          principal={principal}
          tributeRequired={tributeRequired}
          isTributeFlowing={true}
        />
        {getButton()}
        <Report flowTotal={flowTotal} providerName={providerName} />
      </Layout>
    </div>
  );
}

export default App;
