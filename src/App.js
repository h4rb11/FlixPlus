import './App.css';
import React from 'react';
import {Navbar, Container, Nav, Card, Row, Col, Image, Button,} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <div>
        <header>
        <Navbar expand="lg" className="custom-nav">
          <Container>
            <Navbar.Brand href="#home">Flix+</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#categories">Categories</Nav.Link>
                <Nav.Link href="#Review">Review</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </header>

        <div className='main-bg'>
        <main className=''>
        <Container>
        <Row className="px-4 my-4">
        <Col sm={7} >
          <Image src="https://i.ibb.co/KFBy447/wallpaperflare-com-wallpaper-5.jpg"
          rounded
          fluid
          className=""
          />
        </Col>
        <Col sm={5} xs={12} md={6} lg={4} xl={4}>
          <h1>Find Good Movies</h1>
          <p>In here, you can find up to 1 million movies with reviews from different people!</p>
        </Col>
        </Row>

        <Row className='px-4 mx-4'>
        <Col sm={6} xs={6} md={4} lg={4} xl={4}>
          <Card>
            <Card.Img  className='card-style'
            src="https://i.ibb.co/kKfBRZ2/1.jpg"/>
            <Card.Body>
              <Card.Title>MCU</Card.Title>
              <Card.Text>
                Collection of every Movies and Series from the Marvel Cinematic Universe.
              </Card.Text>
              <Button className='btn'>Watch</Button>
            </Card.Body>
          </Card>
          </Col>

          <Col sm={6} xs={6} md={4} lg={4} xl={4}>
          <Card>
            <Card.Img className='card-style'
            src="https://i.ibb.co/XDrQW58/wallpaperflare-com-wallpaper.jpg" />
            <Card.Body>
              <Card.Title>DCEU</Card.Title>
              <Card.Text>
                Collection of every Movies and Series from the DC Universe.
              </Card.Text>
              <Button className='btn'>Watch</Button>
            </Card.Body>
          </Card>
          </Col>

          <Col sm={6} xs={6} md={4} lg={4} xl={4}>
          <Card>
            <Card.Img  className='card-style'
            src="https://i.ibb.co/khd492S/wallpaperflare-com-wallpaper-1.jpg"/>
            <Card.Body>
              <Card.Title>Lucasfilm</Card.Title>
              <Card.Text>
                Collection of every Movies and Series from George Lucas's production.
              </Card.Text>
              <Button className='btn'>Watch</Button>
            </Card.Body>
          </Card>

          </Col>
          <Col sm={6} xs={6} md={4} lg={4} xl={4}>
          <Card>
            <Card.Img  className='card-style'
            src="https://i.ibb.co/vqqQ5Xg/wallpaperflare-com-wallpaper-2.jpg"/>
            <Card.Body>
              <Card.Title>Wizarding World</Card.Title>
              <Card.Text>
                Collection of every Movies based from JK Rowling's Books.
              </Card.Text>
              <Button className='btn'>Watch</Button>
            </Card.Body>
          </Card>
          </Col>

          <Col sm={6} xs={6} md={4} lg={4} xl={4}>
          <Card>
            <Card.Img  className='card-style'
            src="https://i.ibb.co/BGTJjVH/wallpaperflare-com-wallpaper-4.jpg"/>
            <Card.Body>
              <Card.Title>Mission Impossible</Card.Title>
              <Card.Text>
                Collection of every Movies of Mission Impossible.
              </Card.Text>
              <Button className='btn'>Watch</Button>
            </Card.Body>
          </Card>
          </Col>

          <Col sm={6} xs={6} md={4} lg={4} xl={4}>
          <Card>
            <Card.Img  className='card-style'
            src="https://i.ibb.co/nCNqVm4/wallpaperflare-com-wallpaper-3.jpg" />
            <Card.Body>
              <Card.Title>Fast and Furios</Card.Title>
              <Card.Text>
                Collection of every Fast and Furios Movies out there.
              </Card.Text>
              <Button className='btn'>Watch</Button>
            </Card.Body>
          </Card>
          </Col>
        </Row>
        </Container>
        </main>
        </div>


        <footer className="app-footer">
          <Container className="px-4">
            <h4>About Us:</h4>
            <p className="foot">Just bored guys who likes movies.</p>
          </Container>
        </footer>
    </div>
  );
}


export default App;