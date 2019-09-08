import React, { useState, useEffect, useContext } from 'react';
import { EthersContext, EthersContextProvider } from './EthersContext.js';
import View from './View.js';

function App() {
    return (
        <EthersContextProvider>
          <View/>
        </EthersContextProvider>
    );
}

export default App;
