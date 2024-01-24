import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button  from 'react-bootstrap/Button';

import {Link} from 'react-router-dom';

//todo: redirect to home if logged in

export default function Landing() {
    return (
        <Container className="text-center" style={{ height: '100vh' }}>
            <Row >
                <h1>Stylish land page!💅</h1>
            </Row>
            <Row>
                <Card>
                    <Card.Body>
                        <Card.Title>Get Started</Card.Title>
                        <Card.Text>
                            Log in or create an account:
                        </Card.Text>
                        <Button variant="primary" className="m-2">
                            <Link to="/login">Log In</Link>
                        </Button>
                        <Button variant="primary" className="m-2">
                            <Link to="/signup">Create an account</Link>
                        </Button>
                        
                    </Card.Body>
                </ Card>    
            </Row>
        </Container>
    );
}