import React, { useState, useEffect, useContext } from 'react';
import './App.css';
import { EthersContext } from './EthersContext.js';
import { ethers } from 'ethers';

function App() {
    const [ethersContext, setEthersContext] = useContext(EthersContext);

    useEffect(() => {
        if (typeof window.ethereum !== 'undefined'
            || (typeof window.web3 !== 'undefined')) {
            // console.log(window.web3.version);
            // Web3 browser user detected. You can now use the provider.
            let provider = window['ethereum'] || window.web3.currentProvider
            //NOTE: must wrap window.etherm to get provider, not window.web3
            provider = new ethers.providers.Web3Provider(window.ethereum);
            // console.log(await provider.ready);
            setEthersContext(state => ({ ...ethersContext, provider }));
        }
    }, []);

    return (
        <div>
            
        </div>
    );
}

export default App;
