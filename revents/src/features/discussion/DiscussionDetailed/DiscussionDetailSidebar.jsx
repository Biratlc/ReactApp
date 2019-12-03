import React, { Fragment } from 'react'
import { Segment, Item } from 'semantic-ui-react'

const DiscussionDetailSidebar = ({discussion}) => {
    return (
        <Fragment>
            <Segment
                textAlign="center"
                style={{border: "none"}}
                attached="top"
                secondary
                inverted
                color="teal"
        >
            Post related to:
        </Segment>
        <Segment attached>
    <Item>{discussion.category}</Item>
        </Segment>
        </Fragment>
    )
}

export default DiscussionDetailSidebar;