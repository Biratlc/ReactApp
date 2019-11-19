import React, { Fragment } from "react";
import { Card, Image, Button, Header } from "semantic-ui-react";

const UserPhotos = ({ photos, profile, deletePhoto, setProfilePicture  }) => {
  let filteredPhotos;
  if (photos) {
    filteredPhotos = photos.filter(photo => {
      return photo.url !== profile.photoURL;
    });
  }
  return (
    <Fragment>
      <Header sub color="teal" content="All Photos" />
      <Card.Group itemsPerRow={5}>
        <Card>
          <Image src={profile.photoURL || '/assets/user.png'} />
          <Button positive>Profile Picture</Button>
        </Card>
        {photos &&
          filteredPhotos.map(photo => (
            <Card key={photo.id}>
              <Image src={photo.url} />
              <div className="ui two buttons">
                <Button onClick={() => setProfilePicture(photo)} basic icon="settings" color="green" />
                <Button onClick={() => deletePhoto(photo)} basic icon="trash" color="red" />
              </div>
            </Card>
          ))}
      </Card.Group>
    </Fragment>
  );
};

export default UserPhotos;
