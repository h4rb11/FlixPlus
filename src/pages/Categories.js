import './App.css';
import React from 'react';
import {Navbar, Container, NavDropdown, Nav, Card, Row, Col, Image, Button,} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

      <div className="App-header">
        <header>
        <Navbar expand="lg" className="custom-nav">
          <Container>
            <Navbar.Brand href="#home">Flix+</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#Categories">Categories</Nav.Link>
                <NavDropdown title="Contribute" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Donations</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Submit a Review</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Add a Movie</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </header>

        
        <main className='mainbg'>
      <Container> 
        
      
      <Row>

        <Col sm={12} xs={12} md={6} lg={4} xl={4}>
        <card>
          <Card.Img  className='card-style'
          src="https://i.ibb.co/vmZmsDp/1.png"/>
          <Card.Body>
            <Card.Title> WATCH NOW!</Card.Title>
            <Card.Text>
            Fast-paced and include a lot of action like fight scenes, chase scenes, and slow-motion shots.
            </Card.Text>
            <Button className='btn' > ▷</Button>
          </Card.Body>
        </card>
        </Col>

        <Col sm={12} xs={12} md={6} lg={4} xl={4}>
        <card>
          <Card.Img className='card-style'
          src="https://i.ibb.co/z7bs5Hy/2.png" />
          <Card.Body>
            <Card.Title>WATCH NOW!</Card.Title>
            <Card.Text>
            Images are drawn or painted by hand on transparent celluloid sheets to be photographed and exhibited on film.
            </Card.Text>
            <Button className='btn' > ▷</Button>
          </Card.Body>
        </card>
        </Col>

        <Col sm={12} xs={12} md={6} lg={4} xl={4}>
        <card>
          <Card.Img  className='card-style'
          src="https://i.ibb.co/Nx7CHpN/3.png"/>
          <Card.Body>
            <Card.Title>WATCH NOW!</Card.Title>
            <Card.Text>
            A film that dramatizes the life of a non-fictional or historically-based person or people. 
            </Card.Text>
            <Button className='btn' > ▷</Button>
          </Card.Body>
        </card>
        </Col>
        <Col sm={12} xs={12} md={6} lg={4} xl={4}>
        <card>
          <Card.Img  className='card-style'
          src="https://i.ibb.co/y8Twy6X/4.png"/>
          <Card.Body>
            <Card.Title>WATCH NOW!</Card.Title>
            <Card.Text>
            Funny and entertaining. The films in this category are center around a comedic premise.
            </Card.Text>
            <Button className='btn' > ▷</Button>
          </Card.Body>
        </card>
        </Col>

        <Col sm={12} xs={12} md={6} lg={4} xl={4}> 
        <card>
          <Card.Img  className='card-style'
          src="https://i.ibb.co/TLftQN7/5.png"/>
          <Card.Body>
          <Card.Title>WATCH NOW!</Card.Title>
            <Card.Text>
            Inspired by and analogous to the crime fictions. This Category generally involve various aspects of crime and its detection.
            </Card.Text>
            <Button className='btn' > ▷</Button>
          </Card.Body>
        </card>
        </Col>

        <Col sm={12} xs={12} md={6} lg={4} xl={4}>
        <card>
          <Card.Img  className='card-style'
          src="https://i.ibb.co/dkZtxjd/6.png" />
          <Card.Body>
            <Card.Title>WATCH NOW!</Card.Title>
            <Card.Text>
            A film of individuals who possess superhuman abilities and are dedicated to protecting the public. 
            </Card.Text>
            <Button className='btn'> ▷ </Button>
          </Card.Body>
        </card>
        </Col>

      </Row>
      </Container>
        </main>
        <footer class="py-5 mt-5 bg-dark">
          <Container className="px-4">
            <h4 class="text-white">About Us:</h4>
            <p class="text-white">Just bored guys who likes movies.</p>
          </Container>
        </footer>
      </div>
  );
}


export default App;