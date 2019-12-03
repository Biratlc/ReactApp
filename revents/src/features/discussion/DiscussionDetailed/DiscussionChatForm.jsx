import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import { Button, Form } from 'semantic-ui-react';
import TextArea from '../../../app/common/form/TextArea';

class DiscussionChatForm extends Component {
    render(){
        return (
            <Form>
                <Field 
                name='comment'
                type='text'
                component={TextArea}
                rows={2}
                />
                <Button 
                    content="Add Reply"
                    labelPosition="left"
                    icon="edit"
                    primary
                />
            </Form>
        )
    }
}

export default reduxForm({Fields: 'comment'})(DiscussionChatForm);