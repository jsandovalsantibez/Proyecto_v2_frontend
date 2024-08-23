import React from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Header from './Header';  // Importa el Header
import Footer from './Footer';  // Importa el Footer

// Importar las imágenes correctamente
import bienvenida_2 from '../assets/bienvenida_2.png';
import bienvenida_3 from '../assets/bienvenida_3.png';


const Bienvenida2: React.FC = () => {
    return (
        <Container fluid className="d-box flex-column min-vh-100 p-0 m-0">
            <Header /> {/* Agrega el Header aquí */}
            <Row className="flex-grow-1 g-0">
                {/* Carrusel en el fondo */}
                <Carousel className="position-absolute w-100 h-100" controls={false} indicators={false} interval={3000}>
                    <Carousel.Item>
                        <img
                           className="d-block w-100 h-100"
                            src={bienvenida_2}
                            alt="Segunda imagen"
                            style={{ maxWidth: '100%', height: 'auto' }}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-100"
                            src={bienvenida_3}
                            alt="Tercera imagen"
                            style={{ maxWidth: '100%', height: 'auto' }}
                        />
                    </Carousel.Item>
                </Carousel>

                <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
                    <Card style={{ width: '18rem', marginTop: '3rem' }}> 
                        <Card.Body >
                            <Card.Title>Iniciar Sesión</Card.Title>
                            <Card.Text>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Correo de la Empresa</Form.Label>
                                        <Form.Control type="email" placeholder="Ingresar correo" />
    
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Contraseña</Form.Label>
                                        <Form.Control type="password" placeholder="Ingresar contraseña" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Recordar Usuario" />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Ingresar
                                    </Button>
                                </Form>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            
            <Footer /> {/* Agrega el Footer aquí */}
        </Container>
    );
};

export default Bienvenida2;
