import React, { useState, useEffect } from "react";
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useSearchContext } from '../utils/globalState';

// Context

function Search() {
  const [value, setValue] = useState('');
  const [state, dispatch] = useSearchContext();

  function fetchUser() {
    axios({
      url: 'https://jsonplaceholder.typicode.com/users',
    })
    .then((response) => {
      console.log('Response: ', response.data);
      const action = {
        type: 'ADD_USERS',
        payload: response.data
      };

      dispatch(action);
    })
    .catch((error) => {
      console.log('Error: ', error);
    });
  }

  
  // TODO - Call API
  function handleSubmit(event) {
    event.preventDefault();
    fetchUser();
    
    console.log('Value: ', value);
  }


  // JSX
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label> Search</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your search input..."
          onChange={(event) => setValue(event.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Search;
