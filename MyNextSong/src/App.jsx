import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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

function App() {
  return (
    <Container>
      <Header />
      <Row>
        <Col xs={12} md={8}>
          {/* Content goes here */}

        </Col>
        <Col xs={6} md={4}>
          {/* Content goes here */}

        </Col>
      </Row>
    </Container>
  );
}

export default App