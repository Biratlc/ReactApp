import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import DiscussionList from "../DiscussionList/DiscussionList";

class DiscussionDashboard extends Component {
  render() {
    return (
      <Grid>
        <Grid.Column width={10}>
          <DiscussionList />
        </Grid.Column>
        <Grid.Column width={6}></Grid.Column>
      </Grid>
    );
  }
}
export default DiscussionDashboard;
