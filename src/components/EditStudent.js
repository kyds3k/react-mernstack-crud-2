import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const EditStudent = student => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rollno, setRollNo] = useState('');
  const [kid, setKid] = useState([]);

  const history = useHistory();

  let { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios
        .get('http://localhost:4000/students/edit-student/' + id)
        .then(response => {
          setKid(response.data);
          setName(response.data.name);
          setEmail(response.data.email);
          setRollNo(response.data.rollNo);
        })
        .catch(error => {
          console.log(error);
        });
    };
    fetchData();
  }, [id]);

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
      .put('http://localhost:4000/students/update-student/' + id, studentObject)
      .then(res => {
        console.log(res.data);
        console.log('Student successfully updated');
      })
      .catch(error => {
        console.log(error);
      });

    // Redirect to Student List
    setTimeout(() => {
      history.push('/student-list');
    }, 500);
  };

  return (
    <div className='form-wrapper'>
      <Form onSubmit={onSubmit}>
        <Form.Group controlId='Name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='text'
            defaultValue={kid.name}
            onChange={onChangeStudentName}
          />
        </Form.Group>

        <Form.Group controlId='Email'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            defaultValue={kid.email}
            onChange={onChangeStudentEmail}
          />
        </Form.Group>

        <Form.Group controlId='Name'>
          <Form.Label>Roll No</Form.Label>
          <Form.Control
            type='text'
            defaultValue={kid.rollno}
            onChange={onChangeStudentRollno}
          />
        </Form.Group>

        <Button variant='danger' size='lg' block='block' type='submit'>
          Update Student
        </Button>
      </Form>
    </div>
  );
};

export default EditStudent;
