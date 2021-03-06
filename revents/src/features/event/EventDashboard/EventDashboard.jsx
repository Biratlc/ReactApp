import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import EventList from "../EventList/EventList";
import { connect } from "react-redux";
import { createEvent, updateEvent } from "../eventActions";
import LoadingComponent from "../../../app/layout/LoadingComponent";
//import EventActivity from "../EventActivity/EventActivity";
import { firestoreConnect, isLoaded } from "react-redux-firebase";
import { Link } from "react-router-dom";

const mapState = state => ({
  events: state.firestore.ordered.events
});

const actions = {
  createEvent,
  updateEvent
};

class EventDashboard extends Component {
  handleDeleteEvent = id => {
    this.props.deleteEvent(id);
  };

  render() {
    const { events } = this.props;
    if (!isLoaded(events)) return <LoadingComponent />;
    return (
      <Grid>
        <Grid.Column width={11}>
          <EventList events={events} deleteEvent={this.handleDeleteEvent} />
        </Grid.Column>
        <Grid.Column width={5}>
          <Grid.Row>
          <Button
            as={Link}
            to="/createEvent"
            floated="left"
            positive
            inverted
            content="Create Event"
          />
            </Grid.Row>
           <Grid.Row>
           {/* <EventActivity />   */}
           </Grid.Row>
        </Grid.Column>
      </Grid>
    );
  }
}
export default connect(
  mapState,
  actions
)(firestoreConnect([{ collection: 'events' }])(EventDashboard));
