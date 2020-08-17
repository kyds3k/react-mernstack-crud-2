import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import StudentTableRow from './StudentTableRow';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios
        .get('http://localhost:4000/students/')
        .then(response => {
          setStudents(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    };
    fetchData();
  }, [location]); //notice the empty array here

  const DataTable = students => {
    return students.map((res, i) => {
      return <StudentTableRow data={res} key={i} />;
    });
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
