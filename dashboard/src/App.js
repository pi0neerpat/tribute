import React, { useState, useEffect, useContext } from 'react';
import './App.css';
import { EthersContext, EthersContextProvider } from './EthersContext.js';
import { ethers } from 'ethers';
import rDAIContract from './contracts/rDAI.abi.json'

function App() {
    const [ethersContext, setEthersContext] = useContext(EthersContext);

    if (typeof window.ethereum !== 'undefined'
            || (typeof window.web3 !== 'undefined')) {
            
            // console.log(window.web3.version);
            // Web3 browser user detected. You can now use the provider.
            let provider = window['ethereum'] || window.web3.currentProvider
            //NOTE: must wrap window.etherm to get provider, not window.web3
            provider = new ethers.providers.Web3Provider(window.ethereum);
            //let contract = new ethers.Contract('', rDAIContract, provider);

            setEthersContext(state => ({ ...ethersContext, provider }));
            console.log(ethersContext);
    }

    console.log(ethersContext);

    return (
        <EthersContextProvider>
            <div>
                
            </div>
        </EthersContextProvider>
    );
}

export default App;
