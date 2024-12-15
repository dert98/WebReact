import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={12} lg={10}>
          <Card className="shadow-lg rounded">
            <Card.Body>
              <h2 className="text-center mb-4">Acerca de Nosotros</h2>
              <p className="lead text-center">
                En esta página te contamos quiénes somos, qué hacemos y cómo
                trabajamos para brindarte la mejor experiencia posible.
              </p>
              
              <Row>
                <Col md={6}>
                  <Card className="mb-4">
                    <Card.Body>
                      <h5 className="card-title">Nuestra Misión</h5>
                      <p className="card-text">
                        Ofrecemos soluciones innovadoras para satisfacer tus
                        necesidades y superar tus expectativas, trabajando con
                        pasión y compromiso.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="mb-4">
                    <Card.Body>
                      <h5 className="card-title">Nuestra Visión</h5>
                      <p className="card-text">
                        Ser líderes en nuestra industria, destacando por la
                        calidad de nuestros productos y servicios, siempre
                        buscando la mejora continua.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              
              <div className="text-center mt-4">
                <Button variant="primary" size="lg">
                  Contáctanos
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
