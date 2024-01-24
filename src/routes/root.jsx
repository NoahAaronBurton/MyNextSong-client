// import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

  
const Header = () => {
  return (
    <Navbar >
      <Navbar.Brand href="#home">My Next Song</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Sign In</Nav.Link>
      </Nav>
    </Navbar>
  );
}

  
  export default function Root() {

    return (
      <Container>
        <Header />
        <Row>
          <Col xs={12} md={4} order={1}>
            <Card>
              <Card.Body>
                <Card.Title>current song</Card.Title>
                <Card.Text>
                  This is some text within a card body.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={8} order={0}>
            <Card>
              <Card.Body>
                <Card.Title>Main Content</Card.Title>
                <Card.Text>
                  This is some text within a card body.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }