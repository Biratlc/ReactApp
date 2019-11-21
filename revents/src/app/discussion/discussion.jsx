import React, { Component } from "react";
import { Segment, Form, Button, Grid} from "semantic-ui-react";
  
export default class Discussion extends Component {
  
 render() {
    
    return (
      <Grid>
        <Grid.Column width={10}>
          <Segment>
                  <Form onSubmit={this.handleFormSubmit} autoComplete='off'>
                      <Form.Field>
                          <label>Enter your discussion here:</label>
                          <input
                              name='title'
                              placeholder="Type your discussion" />
                      </Form.Field>
                      <Form.Field>
                        <label>Choose your major</label>
                        <select class="ui dropdown">
                          <option value="">What's your major?</option>
                          <option value="1">Computer Science</option>
                          <option value="0">Mathematics</option>
                        </select>
                      </Form.Field>
                      <Button positive type="submit">Submit</Button>
                      <Button type="button"> Cancel </Button>
                  </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  };
};

   