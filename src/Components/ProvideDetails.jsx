import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  ListGroupItem,
  Container,
  Row,
  Col,
  Spinner,
  Alert
} from 'reactstrap';

export default function ProvideDetails() {
  const { plan } = useParams();
  const [planData, setPlanData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]   = useState(false);

  useEffect(() => {
    // mock for preview
    const mock = {
      name: `${plan.charAt(0).toUpperCase() + plan.slice(1)} Ultimate`,
      cost: '$69.99/mo',
      downloadSpeed: '250 Mbps',
      uploadSpeed: '25 Mbps',
      devices: 'Up to 12 devices',
      description: 'Perfect for families, 4K streaming, and gaming.'
    };
    const t = setTimeout(() => {
      setPlanData(mock);
      setLoading(false);
    }, 300);
    return () => clearTimeout(t);
  }, [plan]);

  if (loading) {
    return (
      <Container className="py-5 text-center">
        <Spinner color="primary" />
      </Container>
    );
  }
  if (error) {
    return (
      <Container className="py-5">
        <Alert color="danger">
          Sorry, we couldn’t load the <strong>{plan}</strong> plan.
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow-sm">
            <CardBody>
              <CardTitle tag="h3" className="text-center mb-3">
                {planData.name}
              </CardTitle>
              <ListGroup flush>
                <ListGroupItem><strong>Cost:</strong> {planData.cost}</ListGroupItem>
                <ListGroupItem><strong>Download Speed:</strong> {planData.downloadSpeed}</ListGroupItem>
                <ListGroupItem><strong>Upload Speed:</strong> {planData.uploadSpeed}</ListGroupItem>
                <ListGroupItem><strong>Devices Supported:</strong> {planData.devices}</ListGroupItem>
                <ListGroupItem><strong>Description:</strong> {planData.description}</ListGroupItem>
              </ListGroup>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
