import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect, isEmpty} from "react-redux-firebase";
import {Grid} from "semantic-ui-react";
import UserDetailedHeader from './UserDetailedHeader';
import UserDetailedDescription from './UserDetailedDescription';
//import UserDetailedEvents from './UserDetailedEvents';
import UserDetailedPhotos from './UserDetailedPhotos';
import UserDetailedSidebar from './UserDetailedSidebar';
import { userDetailedQuery } from "../userDetailedQueries";


const mapState = (state, ownProps) => {
  let userUid = null;
  let profile = {};

  if (ownProps.match.params.id === state.auth.uid) {
    profile = state.firebase.profile;
  } else {
    profile =
      !isEmpty(state.firestore.ordered.profile) &&
      state.firestore.ordered.profile[0];
    userUid = ownProps.match.params.id;
  }

  return{
      profile,
      userUid,
      auth: state.firebase.auth,
      photos: state.firebase.ordered.photos
    
    }
  
    };

  class UserDetailedPage extends Component {
    render() {
      const { profile, photos } = this.props;
      return (
        <Grid>
          <UserDetailedHeader profile={profile} />
          <UserDetailedDescription profile={profile}/>
          <UserDetailedSidebar/>
          {photos && photos.length > 0 &&
          <UserDetailedPhotos photos = {photos} />}
         
        </Grid>
      );
    }
  }

  export default compose(
    connect(mapState),
    firestoreConnect((auth, userUid) => userDetailedQuery(auth, userUid))
  )(UserDetailedPage);