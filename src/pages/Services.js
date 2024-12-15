import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Services = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Nuestros Servicios</h2>
      <p className="text-center lead mb-5">
        En nuestra florería, nos especializamos en ofrecer los mejores arreglos florales para cualquier ocasión.
        Conoce nuestros servicios a continuación.
      </p>

      <Row className="g-4">
        {/* Servicio de Arreglos Florales Personalizados */}
        <Col md={4}>
          <Card className="shadow-lg rounded">
            <Card.Img variant="top" src="https://via.placeholder.com/350x200?text=Arreglo+Personalizado" />
            <Card.Body>
              <Card.Title>Arreglos Florales Personalizados</Card.Title>
              <Card.Text>
                Ofrecemos arreglos florales hechos a medida, perfectos para cualquier ocasión, ya sea cumpleaños,
                bodas, aniversarios o simplemente para sorprender a alguien especial.
              </Card.Text>
              <Button variant="primary" href="/contact" className="w-100">
                Solicitar Arreglo
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Servicio de Entrega a Domicilio */}
        <Col md={4}>
          <Card className="shadow-lg rounded">
            <Card.Img variant="top" src="https://via.placeholder.com/350x200?text=Entrega+Dom%C3%ADcilio" />
            <Card.Body>
              <Card.Title>Entrega a Domicilio</Card.Title>
              <Card.Text>
                Nos encargamos de llevar tus flores y arreglos directamente a la puerta de tu ser querido. ¡Hacemos
                entregas puntuales y seguras en toda la ciudad!
              </Card.Text>
              <Button variant="primary" href="/contact" className="w-100">
                Solicitar Entrega
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Servicio de Decoración para Eventos */}
        <Col md={4}>
          <Card className="shadow-lg rounded">
            <Card.Img variant="top" src="https://via.placeholder.com/350x200?text=Decoraci%C3%B3n+Eventos" />
            <Card.Body>
              <Card.Title>Decoración Floral para Eventos</Card.Title>
              <Card.Text>
                Creamos decoraciones florales para eventos especiales como bodas, aniversarios, cumpleaños y más.
                Transforma tu evento con la belleza de nuestras flores.
              </Card.Text>
              <Button variant="primary" href="/contact" className="w-100">
                Consultar Decoración
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="justify-content-center mt-5">
        <Col md={8}>
          <Card className="shadow-lg rounded">
            <Card.Body className="text-center">
              <h3>¡Haz tu Pedido Hoy Mismo!</h3>
              <p>
                No importa la ocasión, tenemos el arreglo perfecto para ti. ¡Contáctanos ahora para crear algo
                especial!
              </p>
              <Button variant="primary" href="/contact" size="lg">
                Contacta con Nosotros
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
