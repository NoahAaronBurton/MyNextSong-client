import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form  from 'react-bootstrap/Form';
import Button  from 'react-bootstrap/Button';

import axios from 'axios';


import { GoogleLogin } from '@react-oauth/google';

export default function Signup() {

    const responseMessage = (response) => {
        console.log(response.credential);

        //todo: send response to backend
        axios.post('http://localhost:3000/api/auth/google', { token: response.credential })
        .then(res => console.log(res.data))
        .catch(err => console.error(err));
    };
    const errorMessage = (error) => {
        console.log(error);
    };

    return (
        <Container>
            <Row>
                {/* Google auth here */}
                <h1>Google stuff!</h1>
                <br />
                <GoogleLogin onSuccess={responseMessage} onError={errorMessage} clientId='272155549288-5m0eal6p2p7ufof91m71sb3ijcqkkasp.apps.googleusercontent.com' />
            </Row>
        </Container>
    )
}