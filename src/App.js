import React from 'react';
import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import CreateStudent from './components/CreateStudent';
import EditStudent from './components/EditStudent';
import StudentList from './components/StudentList';

function App() {
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <Navbar bg='dark' variant='dark'>
            <Container>
              <Navbar.Brand>
                <Link to={'/create-student'} className='nav-link'>
                  React MERN Stack App
                </Link>
              </Navbar.Brand>

              <Nav className='justify-content-end'>
                <Nav>
                  <Link to={'/create-student'} className='nav-link'>
                    Create Student
                  </Link>
                </Nav>
              </Nav>
              {/* <Nav>
                <Link to={"/edit-student/:id"} className="nav-link">
                  Edit Student
                </Link>
              </Nav> */}
              <Nav>
                <Link to={'/student-list'} className='nav-link'>
                  Student List
                </Link>
              </Nav>
            </Container>
          </Navbar>
        </header>
        <Container>
          <Row>
            <Col md={12}>
              <div className='wrapper'>
                <Switch>
                  <Route exact path='/' component={CreateStudent} />
                  <Route path='/create-student' component={CreateStudent} />
                  <Route path='/edit-student/:id' component={EditStudent} />
                  <Route path='/student-list' component={StudentList} />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;
