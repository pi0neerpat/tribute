import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout'
import PromptArea from './components/ActionArea'

function App() {
  const prompt = "To access"
  const providerName = "Mario Broskis"
  const principal = 500
  const tributeRequired = 100

  return (
    <div className="App">
      <Layout >
      <PromptArea providerName={providerName} principal={principal} tributeRequired={tributeRequired}/>

      </Layout>
    </div>
  );
}

export default App;
