import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import p1 from '../../assets/28.jpg';

const DetailProjet1 = () => {
  return (
    <div style={{ backgroundImage: `url(${p1})`, backgroundSize: 'cover', minHeight: '100vh' }}>
      <Container>
        <h1 className="mt-4 text-center">Détails du Projet 1</h1>
        <Row className="mt-4">
          <Col md={6}>
            <Image src={p1} fluid />
          </Col>
          
          <Col md={6} className="d-flex align-items-center">
            <Card>
              <Card.Body>
                <Card.Title className="card-title">Description du Projet 1</Card.Title>
                <Card.Text className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in feugiat molestie. Sed tristique dui nec ultricies scelerisque.
                </Card.Text>
                <Card.Text className="text-dark">
                  Prix: $1000
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DetailProjet1;
