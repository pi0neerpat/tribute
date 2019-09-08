import React from 'react';
import { Button, Grid, Card, Typography } from '@material-ui/core';
import flowing from '../../assets/flowing.png';

const getTributePrompt1 = name => {
  return (
    <Typography variant="body1">
      To access <b>{name}</b> you need to Tribute
    </Typography>
  );
};
const getTributePrompt2 = amount => {
  return `of your ${amount} Unallocated DAI, while you have access.`;
};

const getTributePrompt3 = name => {
  return `DAI tokens will never leave your wallet.\nThe interest from this tribute will flow to ${name} until you choose to end the tribute.`;
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
      <>
        <Typography variant="body1">
          {getTributePrompt1(providerName)}
        </Typography>
        <Card
          style={{
            margin: 8,
            padding: '10px 20px 10px 20px',
            backgroundColor: '#99bbe9'
          }}
          raised
        >
          <Typography variant="h5">
            <b>{tributeRequired} DAI</b>
          </Typography>
        </Card>
        <Typography variant="body1">{getTributePrompt2(principal)}</Typography>
        <Card style={{ margin: 10, padding: 10, backgroundColor: '#ECEAEC' }}>
          <Typography
            variant="caption"
            style={{ color: '#867486', lineHeight: 0.5 }}
          >
            {getTributePrompt3(providerName)}
          </Typography>
        </Card>
      </>
    );
  };

  const flowingPrompt = () => {
    return (
      <>
        <Typography variant="body1">
          Tribute is flowing to <b>{providerName}</b>
        </Typography>
        <img style={{ padding: 20 }} src={flowing} />
      </>
    );
  };

  const displayPrompt = () => {
    return isTributeFlowing ? flowingPrompt() : tributePrompt();
  };

  return (
    <div>
      <Grid
        container
        direction="column"
        alignContent="center"
        alignItems="center"
        style={{ padding: 10 }}
      >
        {displayPrompt()}
      </Grid>
    </div>
  );
};

export default PromptArea;
