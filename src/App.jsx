import React from 'react';
import { Container, Row, Col, Card, Button, Navbar, Nav,Image } from 'react-bootstrap';
import './App.css'; 

function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" className='justify-content-between'>
        <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#about">About Me</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar>

     
      <section id="about" className="py-5">
        <Container>
          <Row className="d-flex justify-content-center" >

          <Col md={4} >
              <img 
                src="./public/profile.jpg"
                alt="Profile"
                className="img-fluid rounded-circle "
              />
            </Col>
            </Row>
            <Row className="d-flex justify-content-center">
            <Col md={6}>
              
              <p className='p-5'>
                Hi, I'm a passionate web developer with experience in front-end and back-end technologies. I love building user-friendly websites and applications.
              </p>
            </Col>
            
          </Row>
        </Container>
      </section>

      
      <section id="skills" className="bg-light py-5">
        <Container>
          <h2 className="text-center">Skills</h2>
          <Row>
            <Col md={4}>
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>React</Card.Title>
                  <Card.Text>Building interactive UIs</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>Node.js</Card.Title>
                  <Card.Text>Back-end development</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>Bootstrap</Card.Title>
                  <Card.Text>Responsive design</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

     
      <section id="projects" className="py-5">
        <Container>
          <h2 className="text-center">My Projects</h2>
          <Row>
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src="./public/trvl.jpg" />
                <Card.Body>
                  <Card.Title>Project 1</Card.Title>
                  <Card.Text>
                    Travel and tourism
                  </Card.Text>
                  <Button variant="primary" href="#!">View Details</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src="./public/budget.jpg" />
                <Card.Body>
                  <Card.Title>Project 2</Card.Title>
                  <Card.Text>
                    Personal Budget Tracker.
                  </Card.Text>
                  <Button variant="primary" href="#!">View Details</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src="./public/weather.jpg" />
                <Card.Body>
                  <Card.Title>Project 3</Card.Title>
                  <Card.Text>
                    Weather Dashboard.
                  </Card.Text>
                  <Button variant="primary" href="#!">View Details</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

    
      <section id="contact" className="bg-dark text-white py-5">
        <Container>
          <h2 className="text-center">Contact</h2>
          <Row >
            <Col md={6} d-flex justify-content-evenly>
              <p>rrk96567624@gmail.com</p>
            </Col>
            <Col md={6} >
              <p className='d-flex justify-content-end'> linkedin.com/in/reshma_rk</p>
            </Col>
          </Row>
        </Container>
      </section>

     
      <footer className="text-center py-3 bg-dark text-white">
        <p>&copy; 2025 My Portfolio</p>
      </footer>
    </div>
  );
}

export default App;
