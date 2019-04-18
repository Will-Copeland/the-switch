import React, { Component } from 'react';
import './App.css';
import client from './util/init-apollo';
import { ApolloProvider, Query, Mutation } from "react-apollo";
import "react-toggle/style.css"
import QueryTest from './QueryTest';
import gql from 'graphql-tag';

const GET_LAST_ENTRY = gql`
  query {
    getSwitchState {
      id
      switchState
      time
    }
  }
`;

class App extends Component {

  render() {
    const { switchState, lastSwitchTime } = this.state;
    console.log(lastSwitchTime);
    
    return (
      <ApolloProvider client={client}>
      <div className="App">
        <QueryTest />
      </div>
      </ApolloProvider>
    
    );
  }
}

export default App;
