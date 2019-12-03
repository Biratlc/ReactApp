import React, { Component } from 'react'
import { Segment, Comment } from 'semantic-ui-react'
import DiscussionChatForm from './DiscussionChatForm'

class DiscussionDetailedChat extends Component {
    render() {
      
        return (
            <div>
                

                <Segment attached>
                    <Comment.Group>
                       <DiscussionChatForm/>
                    </Comment.Group>
                </Segment>
            </div>
        )
    }
}

export default DiscussionDetailedChat;