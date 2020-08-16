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
        //console.log(students);
      })
      .catch(error => {
        console.log(error);
      });
  }, []); //notice the empty array here

  const DataTable = students => {
    return (
      <div>
        {students.map(student => {
          return <StudentTableRow obj={student} key={student.id} />;
        })}
      </div>
    );
    // return students.map(student => {
    //   return <StudentTableRow obj={student} key={student.id} />;
    // });
  };

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
        <tbody>{DataTable(students)}</tbody>
      </Table>
    </div>
  );
};

export default StudentList;
