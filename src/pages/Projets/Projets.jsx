import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Projets/Projets.css';
import p1 from '../../assets/28.jpg';
import p2 from '../../assets/29.jpg';
import p3 from '../../assets/30.jpg';
import p4 from '../../assets/31.jpg';
import p5 from '../../assets/32.jpg';
import p6 from '../../assets/38.jpg';

const Projets = () => {
  return (
    <Container>
      <h1 className="mt-4">Liste des projets</h1>
      <Row>
        <Col sm={4}>
          <Card>
            <Card.Img variant="top" src={p1} />
            <Card.Body>
              <Card.Title>Titre du projet 1</Card.Title>
              <Card.Text>
                Description du projet 1
              </Card.Text>
              <NavLink to="/dp1">Voir plus</NavLink>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4}>
          <Card>
            <Card.Img variant="top" src={p6} />
            <Card.Body>
              <Card.Title>Titre du projet 2</Card.Title>
              <Card.Text>
                Description du projet 2
              </Card.Text>
              <NavLink to="/dp2">Voir plus</NavLink>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4}>
          <Card>
            <Card.Img variant="top" src={p3} />
            <Card.Body>
              <Card.Title>Titre du projet 3</Card.Title>
              <Card.Text>
                Description du projet 3
              </Card.Text>
              <NavLink to="/dp3">Voir plus</NavLink>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
          <Card>
            <Card.Img variant="top" src={p4} />
            <Card.Body>
              <Card.Title>Titre du projet 4</Card.Title>
              <Card.Text>
                Description du projet 4
              </Card.Text>
              <NavLink to="/dp4">Voir plus</NavLink>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4}>
          <Card>
            <Card.Img variant="top" src={p5} />
            <Card.Body>
              <Card.Title>Titre du projet 5</Card.Title>
              <Card.Text>
                Description du projet 5
              </Card.Text>
              <NavLink to="/dp5">Voir plus</NavLink>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4}>
          <Card>
            <Card.Img variant="top" src={p2} />
            <Card.Body>
              <Card.Title>Titre du projet 6</Card.Title>
              <Card.Text>
                Description du projet 6
              </Card.Text>
              <NavLink to="/dp6">Voir plus</NavLink>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Projets;
