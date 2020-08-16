import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const StudentTableRow = props => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.email}</td>
      <td>{props.rollno}</td>
      <td>
        <Link className='edit-link' to={'/edit-student/' + props._id}>
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
