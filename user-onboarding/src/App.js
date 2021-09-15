import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import './App.css';
import Form from './components/Form';
import User from './components/User';
import formSchema from './validate/Validate';

const initialFormValues = {
  first_name: '',
  email: '',
  password: '',
  terms: false,
}

const initialFormErrors = {
  first_name: '',
  email: '',
  password: '',
  terms: '',
}

const initialUsers = [];
const initialDisabled = true;

function App() {

  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  
  const validate = (name, value) => {
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: ''}))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const getUsers = () => {
    axios.get(`https://reqres.in/api/users`)
      .then(resp => {
        setUsers(resp.data.data);
      }).catch(err => console.log(err))
  }

  const postNewUsers = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(resp => {
        setUsers([resp.data, ...users]);
        setFormValues(initialFormValues);
      }).catch(err => {
        console.log(err);
        setFormValues(initialFormValues);
      })
  }


  const onChange = (name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]: value})
  }

  const onSubmit = () => {
    const newUser = {
      first_name: formValues['first_name'].trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),

    }
    postNewUsers(newUser);
  }

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div>
      
      <Form 
      values={formValues}
      onChange={onChange}
      onSubmit={onSubmit}
      disabled={disabled}
      errors={formErrors}
      />
      {users.map(user => {
        return (
        <User  info={user} />
        )
      })}
    </div>
    
    
  )
}

export default App;
