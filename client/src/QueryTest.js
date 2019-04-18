import React, { Component } from "react";
import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";
import Toggle from "react-toggle";
import Moment from "moment";

const GET_LAST_ENTRY = gql`
  query {
    getSwitchState {
      id
      switchState
      time
    }
  }
`;

 

class QueryTest extends Component {
  getInitialState = () => (
    <Query query={GET_LAST_ENTRY}>
      {({ loading, error, data }) => {
        if (loading) return <h1>LODing</h1>;
        console.log(data);

        if (error) return `ERROR ${error}`;
        const toggleTimeAgo = Moment(data.getSwitchState[0].time).fromNow();
        return (
          <React.Fragment>
            <Toggle checked={data.getSwitchState[0].switchState} />
            <h1>Last Switch: {toggleTimeAgo}</h1>
          </React.Fragment>
        );
      }}
    </Query>
  );

  render() {
    const { classes } = this.props;
    return (
      <Query query={GET_LAST_ENTRY}>
        {({ loading, error, data }) => {
          if (loading) return <h1>LODing</h1>;
          console.log(data);

          if (error) return `ERROR ${error}`;
          const toggleTimeAgo = Moment(data.getSwitchState[0].time).fromNow();
          return (
            <React.Fragment>
              <Toggle checked={data.getSwitchState[0].switchState} />
              <h1>Last Switch: {toggleTimeAgo}</h1>
            </React.Fragment>
          );
        }}
      </Query>
    );
  }
}

export default QueryTest;
