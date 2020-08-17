import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import StudentTableRow from './StudentTableRow';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  const studentArray = [
    {
      _id: '5f36dedf1286d95965005d80',
      name: 'Adam Darby',
      email: 'kyds3k@gmail.com',
      rollno: 666,
      __v: 0
    },
    {
      _id: '5f36def41286d95965005d81',
      name: 'Sarah-Blythe Ballard',
      email: 'thenavydoc@gmail.com',
      rollno: 777,
      __v: 0
    },
    {
      _id: '5f391a7cd916f55a3023c3c5',
      name: 'Adam Darby',
      email: 'kyds3k@gmail.com',
      rollno: 666,
      __v: 0
    },
    {
      _id: '5f391f1fd916f55a3023c3c6',
      name: 'Adam Darby',
      email: 'kyds3k@gmai.com',
      rollno: 566,
      __v: 0
    },
    {
      _id: '5f392026d916f55a3023c3c7',
      name: 'Adam Darby',
      email: 'kyds3k@gmail.com',
      rollno: 666,
      __v: 0
    },
    {
      _id: '5f392062d916f55a3023c3c8',
      name: 'Adam Darby',
      email: 'kyds3k@gmail.com',
      rollno: 666,
      __v: 0
    },
    {
      _id: '5f39207ad916f55a3023c3c9',
      name: 'Adam Darby',
      email: 'kyds3k@gmail.com',
      rollno: 666,
      __v: 0
    },
    {
      _id: '5f3920a5d916f55a3023c3ca',
      name: 'Adam Darby',
      email: 'kyds3k@gmail.com',
      rollno: 2252,
      __v: 0
    },
    {
      _id: '5f3920d7d916f55a3023c3cb',
      name: 'Adam Darby',
      email: 'kyds3k@gmail.com',
      rollno: 2424,
      __v: 0
    },
    {
      _id: '5f3921d3d916f55a3023c3cc',
      name: 'Adam Darby',
      email: 'kyds3k@gmail.com',
      rollno: 444,
      __v: 0
    },
    {
      _id: '5f3921d8d916f55a3023c3cd',
      name: 'Adam Darby',
      email: 'kyds3k@gmail.com',
      rollno: 444,
      __v: 0
    },
    {
      _id: '5f39241b05292663cb2f13bf',
      name: 'Adam Darby',
      email: 'kyds3k@gmail.com',
      rollno: 444,
      __v: 0
    },
    {
      _id: '5f3924f605292663cb2f13c0',
      name: 'Adam Darby',
      email: 'kyds3k@gmail.com',
      rollno: 4242,
      __v: 0
    },
    {
      _id: '5f39261405292663cb2f13c1',
      name: 'Adam Darby',
      email: 'kyds3k@gmail.com',
      rollno: 242,
      __v: 0
    }
  ];

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

  // const DataTable = data => {
  //   return data.map(el => {
  //     return <StudentTableRow obj={el} key={el._id} />;
  //   });
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
          {studentArray.map(student => {
            return <StudentTableRow obj={student} key={student._id} />;
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default StudentList;
