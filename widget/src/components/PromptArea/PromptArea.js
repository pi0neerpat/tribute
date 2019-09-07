import React from 'react';
import { Button, Grid, Card, Heading } from '@material-ui/core'

const TRIBUTE_HELPER = "DAI tokens will never leave your wallet. The interest from this tribute will flow to Super Marzio."

const getTributePrompt1 = (name) => {
  return `To access ${name} you need to Tribute`
}
const getTributePrompt2 = (amount) => {
  return `of your ${amount} Unallocated DAI, while you have access`
}

const ActionArea = ({providerName, principal, tributeRequired}) => {

return (
  <div >

  <Grid container direction="row" alignContent="center" alignItems="center">
  <Grid item>
{getTributePrompt1(providerName)}
<Card raised>


{tributeRequired}
</Card>
{getTributePrompt2(principal)}
{TRIBUTE_HELPER}

  </Grid>


</Grid>

<Button variant="contained" color="primary">
Hello World
</Button>

${props.children}
  </div>
)
}

export default ActionArea;
