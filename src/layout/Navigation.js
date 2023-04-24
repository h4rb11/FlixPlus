import {Navbar, Nav, Container,} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

function Navigation(){
  
return(
      <Navbar expand="lg" className="custom-nav">
        <Container>
          <LinkContainer to="/">
          <Navbar.Brand href="#home"><img src="https://i.ibb.co/NrHLsWd/341921522-185758857730067-5994954047881447596-n.png" width="50px" height="50px" />Flix+</Navbar.Brand>
            </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/categories">
                <Nav.Link href="#categories">Categories</Nav.Link>
              </LinkContainer>
              <Nav.Link href="#submit">Submit a Review</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default Navigation