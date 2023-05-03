import { useState } from 'react'
import './App.css'

// components
import { getButtonStyles } from './Button/Button'
import { Grid } from './Grid/Grid'



function App() {
  const DefaultButton = getButtonStyles();
  const SuccessButton = getButtonStyles('success');
  const ErrorButton = getButtonStyles('error');
  const WarningButton = getButtonStyles('warning');
  const InfoButton = getButtonStyles('info');

  return (
    <>
      <Grid>
        <DefaultButton>Default</DefaultButton>
        <SuccessButton>Success</SuccessButton>
        <ErrorButton>Error</ErrorButton>
        <WarningButton>Warning</WarningButton>
        <InfoButton>Info</InfoButton>
      </Grid>
    </>
  )
}

export default App
