import React from 'react';
import AplloClient from 'apollo-boost';
import { BrowserRouter, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import './App.css';
import logo from './logo.png';
import Launches from './components/Launches';
import Launch from './components/Launch';


const client = new AplloClient({
  uri: '/graphql'
});

const App = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <div className="container">
        <img
          src={logo}
          alt="SpaceX"
          style={{ width: 300, display: 'block', margin: 'auto' }}
        />

        <Route exact path="/" component={Launches} />
        <Route path="/launch/:flight_number" component={Launch} />
      </div>
    </BrowserRouter>
  </ApolloProvider>
);

export default App;
