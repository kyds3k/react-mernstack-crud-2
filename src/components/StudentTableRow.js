import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import axios from 'axios';

const StudentTableRow = student => {
  const history = useHistory();
  const deleteStudent = id => {
    axios
      .delete('http://localhost:4000/students/delete-student/' + id)
      .then(res => {
        console.log('Student successfully deleted!');
      })
      .catch(error => {
        console.log(error);
      });
    setTimeout(() => {
      history.push('/student-list');
    }, 500);
  };

  return (
    <tr>
      <td>{student.data.name}</td>
      <td>{student.data.email}</td>
      <td>{student.data.rollno}</td>
      <td>
        <Link className='edit-link' to={'/edit-student/' + student.data._id}>
          Edit
        </Link>
        <Button
          onClick={() => {
            deleteStudent(student.data._id);
          }}
          size='sm'
          variant='danger'>
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default StudentTableRow;
