"use client"; // Required for interactive components

import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function HomePage() {
  return (
    <Container className="vh-100 d-flex align-items-center justify-content-center">
      <Row className="text-center">
        <Col>
          <h1 className="mb-4">Find your ideal stay , perfectly suited for you</h1>
          <p className="lead">
            an all-in-one platform that helps you find what you need
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
