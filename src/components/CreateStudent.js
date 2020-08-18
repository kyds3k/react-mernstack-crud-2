import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const CreateStudent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rollno, setRollNo] = useState('');

  const onChangeStudentName = e => {
    setName(e.target.value);
  };

  const onChangeStudentEmail = e => {
    setEmail(e.target.value);
  };

  const onChangeStudentRollno = e => {
    setRollNo(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    const studentObject = {
      name,
      email,
      rollno
    };
    axios
      .post('http://localhost:4000/students/create-student', studentObject)
      .then(res => console.log(res.data));

    setName('');
    setEmail('');
    setRollNo('');
  };

  return (
    <div className='form-wrapper'>
      <Form onSubmit={onSubmit}>
        <Form.Group controlId='Name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='text'
            value={name}
            onChange={onChangeStudentName}
          />
        </Form.Group>

        <Form.Group controlId='Email'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            value={email}
            onChange={onChangeStudentEmail}
          />
        </Form.Group>

        <Form.Group controlId='Name'>
          <Form.Label>Roll No</Form.Label>
          <Form.Control
            type='text'
            value={rollno}
            onChange={onChangeStudentRollno}
          />
        </Form.Group>

        <Button variant='danger' size='lg' block='block' type='submit'>
          Create Student
        </Button>
      </Form>
    </div>
  );
};

export default CreateStudent;
