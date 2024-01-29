import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Header = () => {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      const url = `${import.meta.env.VITE_API_URL}/auth/logout`;
      await axios.get(url, {withCredentials: true});
      console.log('logged out');
      navigate('/login'); 
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <Navbar>
      <Navbar.Brand href="">My Next Song</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="">Home</Nav.Link>
        <Nav.Link onClick={logout}>Sign Out</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default function Home() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // get user info from server
  const getUser = async () => {
    try {
      const url = `${import.meta.env.VITE_API_URL}/auth/login/success`;
      const {data} = await axios.get(url, {withCredentials: true});
      setUser(data.user._json);
      console.log(data);
      console.log(data.user._json);
    } catch (err) {
      console.error(err);
      navigate('/login');
    }
  }
  useEffect(() => {
    getUser();
    // if (!user) {
    //   navigate('/login');
    // }
  
  }, []);


  return (
    <Container>
      <Header />
      <Row>
        <Col xs={12}>
          <Card>
            <Card.Body>
              <Card.Title>{user ? user.name : 'no user'}</Card.Title>
              <Card.Text>
                
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
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