import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button  from 'react-bootstrap/Button';

export default function Login() {

    //todo: use api endpoints for user auth status, info, etc

    const googleAuth = () => {
        window.open(`${import.meta.env.VITE_API_URL}/auth/google/callback`, '_self');
    }

    return (
        <Container>
            <Row>
                {/* Google auth here */}
                <h1>Google stuff!</h1>
                <br />
                <Button onClick={googleAuth}>Google Auth</Button>
            </Row>
        </Container>
    )
}