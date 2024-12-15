import React, { useState } from 'react';
import { Button, Form, Container, Alert } from 'react-bootstrap';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Función para manejar el envío del formulario
  const handleLogin = (e) => {
    e.preventDefault();

    // Validación simple
    if (!email || !password) {
      setError('Por favor, completa todos los campos.');
      return;
    }

    // Aquí iría la lógica de autenticación
    setError('');
    alert('Inicio de sesión exitoso');
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="w-100" style={{ maxWidth: '400px' }}>
      <label className="floriana-text text-center mb-4">Iniciar Sesión</label>
        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleLogin}>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Introduce tu correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Introduce tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100 mt-4">
            Iniciar sesión
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Login;
