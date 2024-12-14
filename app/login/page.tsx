"use client";
import React from "react";
import { Form, Button, Container } from "react-bootstrap";

export default function LoginPage() {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Login</h2>
      <Form>
        <Form.Group controlId="formBasicEmail" className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
}
