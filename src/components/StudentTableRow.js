import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const StudentTableRow = student => {
  return (
    <tr>
      <td>{student.data.name}</td>
      <td>{student.data.email}</td>
      <td>{student.data.rollno}</td>
      <td>
        <Link className='edit-link' to={'/edit-student/' + student.data._id}>
          Edit
        </Link>
        <Button size='sm' variant='danger'>
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default StudentTableRow;
