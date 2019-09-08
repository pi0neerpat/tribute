import React from 'react';
import { Button, Grid, Card, Heading } from '@material-ui/core';

const getTributePrompt1 = name => {
  return `To access ${name} you need to Tribute`;
};
const getTributePrompt2 = amount => {
  return `of your ${amount} Unallocated DAI, while you have access`;
};

const getTributePrompt3 = name => {
  return `DAI tokens will never leave your wallet. The interest from this tribute will flow to ${name} until you choose to end the tribute.`;
};

const PromptArea = ({
  providerName,
  principal,
  tributeRequired,
  isTributeFlowing
}) => {
  let currentStage = 0;

  const tributePrompt = () => {
    return (
      <Grid
        container
        direction="column"
        alignContent="center"
        alignItems="center"
      >
        <Grid item xs>
          {getTributePrompt1(providerName)}
        </Grid>
        <Card raised>{tributeRequired}</Card>
        <Grid item xs>
          {getTributePrompt2(principal)}
        </Grid>
        <Grid item xs>
          {getTributePrompt3(providerName)}
        </Grid>
      </Grid>
    );
  };

  const flowingPrompt = () => {
    return <div>tribute is flowing to {providerName}</div>;
  };

  const displayStage = () => {
    return isTributeFlowing ? flowingPrompt() : tributePrompt();
  };

  return <div>{displayStage()}</div>;
};

export default PromptArea;
