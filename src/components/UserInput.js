import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class UserInput extends React.Component {
  render() {
    return (
      <Form inline className="m-2">
        <FormGroup>
          <Label for="searchUrl" hidden>Search URL</Label>
          <Input type="text" name="searchUrl" id="searchUrl" placeholder="Search URL" defaultValue={this.props.searchUrl} />
        </FormGroup>
        {' '}
        <FormGroup>
          <Label for="googleApiKey" hidden>Google API Key</Label>
          <Input type="text" name="googleApiKey" id="googleApiKey" placeholder="Google API Key" defaultValue={this.props.googleApiKey} />
        </FormGroup>
        {' '}
        <Button>Submit</Button>
      </Form>
    )
  }
}

UserInput.propTypes = {
  searchUrl: PropTypes.string,
  googleApiKey: PropTypes.string
}


export default UserInput;
