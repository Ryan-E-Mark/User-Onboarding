import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import './App.css';

const initialFormValues = {
  username: '',
  email: '',
  password: '',
  terms: false,
}

const initialFormErrors = {
  username: '',
  email: '',
  password: '',
  terms: '',
}

const initialFriends = [];
const initialDisabled = true;

function App() {

  const [friends, setFriends] = useState(initialFriends)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disables, setDisabled] = useState(initialDisabled)

  


  return (
    <h1>Placeholder</h1>
  )
}

export default App;
