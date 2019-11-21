import React, { Component } from "react";
import { combineValidators, isRequired } from "revalidate";
import {
  Segment,
  Form,
  Button,
  Grid,
  Header,
  TextArea
} from "semantic-ui-react";
import SelectInput from "../../../app/common/form/SelectInput";
import PlaceInput from "../../../app/common/form/PlaceInput";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { Field } from "redux-form";

const category = [
  { key: "CMPS161", text: "CMPS161", value: "CMPS161" },
  { key: "CMPS280", text: "CMPS280", value: "CMPS280" },
  { key: "CMPS285", text: "CMPS285", value: "CMPS285" },
  { key: "CMPS290", text: "CMPS290", value: "CMPS290" },
  { key: "CMPS390", text: "CMPS390", value: "CMPS390" },
  { key: "CMPS375", text: "CMPS375", value: "CMPS375" },
  { key: "CMPS415", text: "CMPS415", value: "CMPS415" },
  { key: "CMPS431", text: "CMPS431", value: "CMPS431" },
  { key: "CMPS479", text: "CMPS479", value: "CMPS479" },
  { key: "CMPS482", text: "CMPS482", value: "CMPS482" },
  { key: "CMPS411", text: "CMPS411", value: "CMPS411" },
  { key: "CMPS383", text: "CMPS383", value: "CMPS383" },
  { key: "CMPS411", text: "CMPS411", value: "CMPS411" },
  { key: "CMPS315", text: "CMPS315", value: "CMPS315" },
  { key: "CMPS329", text: "CMPS329", value: "CMPS329" },
  { key: "CMPS439", text: "CMPS439", value: "CMPS439" },
  { key: "MATH201", text: "MATH201", value: "MATH201" },
  { key: "MATH392", text: "MATH392", value: "MATH392" },
  { key: "MATH380", text: "MATH380", value: "MATH380" },
  { key: "MATH312", text: "MATH312", value: "MATH312" },
  { key: "MATH350", text: "MATH350", value: "MATH350" }
];

class DiscussionForm extends Component {
  render() {
    return (
      <Grid>
        <Grid.Column width={10}>
          <Segment>
            <Form onSubmit={this.handleFormSubmit} autoComplete="off">
              <Form.Field>
                <Header sub color="teal" content="Discussion Details" />
                <input name="title" placeholder="Discussion Title" />
              </Form.Field>
              <Form.Field>
                <TextArea
                  rows={2}
                  placeholder="Tell us more about your Discussion"
                />
              </Form.Field>
              <Form.Field>
                <label>Choose your major</label>
                <select class="ui dropdown">
                  <option value="">
                    Which class is your discussion related to?
                  </option>
                  <option value="0"> CMPS161</option>
                  <option value="0"> CMPS280</option>
                  <option value="0">CMPS285</option>
                  <option value="0"> CMPS290</option>
                  <option value="0"> CMPS390</option>
                  <option value="0"> CMPS375</option>
                  <option value="0"> CMPS415</option>
                  <option value="0"> CMPS431</option>
                  <option value="0"> CMPS479</option>
                  <option value="0"> CMPS482</option>
                  <option value="0"> CMPS411</option>
                  <option value="0"> CMPS383</option>
                  <option value="0"> CMPS411</option>
                  <option value="0"> CMPS315</option>
                  <option value="0"> CMPS329</option>
                  <option value="0"> CMPS439</option>
                  <option value="0"> MATH201</option>
                  <option value="0"> MATH392</option>
                  <option value="0"> MATH380</option>
                  <option value="0"> MATH312</option>
                  <option value="0"> MATH350</option>
                </select>
              </Form.Field>

              <Button positive type="submit">
                Submit
              </Button>
              <Button type="button"> Cancel </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>

      //   <Grid>
      //     <Grid.Column width={10}>
      //       <Segment>
      //         <Header sub color="teal" content="Discussion Details" />
      //         <Form autoComplete="off">
      //           <Form
      //             name="title"
      //             component={TextInput}
      //             options={category}
      //             placeholder="Discussion Title"
      //           />
      //           <Form
      //             name="category"
      //             component={SelectInput}
      //             options={category}
      //             multiple={true}
      //             placeholder="Which class is your Discussion related to?"
      //           />
      //           <Form
      //             name="description"
      //             component={TextArea}
      //             rows={3}
      //             placeholder="Tell us more about the discussio"
      //           />

      //           {/* <Field
      //             name="date"
      //             component={DateInput}
      //             dateFormat='dd LLL yyyy h:mm a'
      //             showTimeSelect
      //             timeFormat='HH:mm'
      //             placeholder="Event Date"
      //           /> */}

      //           <Button positive type="submit">
      //             Submit
      //           </Button>
      //           <Button type="button">Cancel</Button>
      //           <Button type="button" floated="right" />
      //         </Form>
      //       </Segment>
      //     </Grid.Column>
      //   </Grid>
    );
  }
}

export default DiscussionForm;
