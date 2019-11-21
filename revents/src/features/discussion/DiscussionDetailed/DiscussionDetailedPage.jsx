import React, { Component } from "react";
import { Segment, Form, Button, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class Discussion extends Component {
  render() {
    return (
      <Grid>
        <Grid.Column width={10}>
          <Segment>
            <p>Discussion Detailed Page</p>
          </Segment>
        </Grid.Column>
        <Grid.Column width={5}>
          <Button
            as={Link}
            to="/createDiscussion"
            positive
            inverted
            content="Create Discussion"
          />
        </Grid.Column>
      </Grid>
    );
  }
}
