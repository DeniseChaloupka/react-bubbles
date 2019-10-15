import React from "react";
import { Form, Segment, Header } from 'semantic-ui-react'
import axios from 'axios'
import { useFormInput } from '../hooks';


const Login = props => {
  
  const [values, changeHandler] = useFormInput({ username: '', password: '' })

  const logInHandler = () => {
    axios
      .post(`http://localhost:5000/api/login`, values)
      .then(res => {
        localStorage.setItem('token', res.data.payload)
        props.history.push('/bubblepage')
      })
      .catch(err => console.log('LogIn: POST:', err, values))
  }

  return (
    <Segment>
      <Segment>
        <Header>Log In</Header>
        <Form
          onSubmit={logInHandler}>
          <Form.Input 
            fluid
            label='Username'
            name='username'
            placeholder='Username'
            value={values.username}
            onChange={changeHandler}
          />
          <Form.Input 
            fluid
            label='Password'
            name='password'
            placeholder='Password'
            value={values.password}
            onChange={changeHandler}
          />
          <Form.Button>Log In</Form.Button>
        </Form>         
      </Segment>
    </Segment>
  );
};

export default Login;