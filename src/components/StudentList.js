import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import StudentTableRow from './StudentTableRow';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:4000/students/')
      .then(res => {
        setStudents({
          students: res.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }, []); //notice the empty array here

  // const DataTable = students => {
  //   setTimeout(() => {
  //     console.log(students.students);
  //     // return students[0].map(kid => {
  //     //   return <td key={kid._id}>{kid.name}</td>;
  //     // });
  //   }, 2000);
  // };

  return (
    <div className='table-wrapper'>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Roll No</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => {
            return <StudentTableRow obj={student} key={student.id} />;
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default StudentList;
