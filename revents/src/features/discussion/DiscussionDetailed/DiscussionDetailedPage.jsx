import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import {compose} from 'redux';
import { withFirestore, firebaseConnect, isEmpty } from "react-redux-firebase";
import { objectToArray } from "../../../app/common/util/helper";
import DiscussionDetail from "./DiscussionDetail";
import DiscussionDetailedChat from "./DiscussionDetailedChat";
import DiscussionDetailSidebar from "./DiscussionDetailSidebar";
import { toastr } from "react-redux-toastr";

const mapState = (state, ownProps) => {
  const discussionId = ownProps.match.params.id;

  let discussion = {};

  if (state.firestore.ordered.discussions && state.firestore.ordered.discussions.length > 0) {
    discussion = state.firestore.ordered.discussions.filter(
      discussion => discussion.id === discussionId
    )[0];
  }

  return {
    discussion
  }; 
};

class DiscussionDetailedPage extends Component{
 
  async componentDidMount(){
    const {firestore, match, history} = this.props;
    let discussion = await firestore.get(`discussions/${match.params.id}`);
    if(!discussion.exists){
      history.push(`/discussions`);
      toastr.error('Sorry', 'Discussion not found');
    }
  }
  render() {
    const {discussion, discussionChat} = this.props;
    return (
      <Grid>
        <Grid.Column width={13}>
          <DiscussionDetail discussion={discussion} />
          <DiscussionDetailedChat discussionChat={discussionChat}/>
        </Grid.Column>
        <Grid.Column width={3}>
          <DiscussionDetailSidebar discussion={discussion} />
        </Grid.Column>
      </Grid>
    );
  }
}

export default compose(
  withFirestore, connect(mapState, null),
  firebaseConnect((props) => ([`discussion_chat/${props.match.params.id}`]))
)(DiscussionDetailedPage);
