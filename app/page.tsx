"use client"; // Required for interactive components

import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function HomePage() {
  return (
    <Container className="vh-100 d-flex align-items-center justify-content-center">
      <Row className="text-center">
        <Col>
          <h1 className="mb-4">Welcome to Our App</h1>
          <p className="lead">
            This is the starting point for the login and signup process.
          </p>
          <div>
            <Button href="/login" variant="primary" className="me-2">
              Login
            </Button>
            <Button href="/signup" variant="success">
              Sign Up
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
