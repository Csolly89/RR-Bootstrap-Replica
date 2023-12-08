import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Locations() {
    return (
        <div>
            <h2>Choose your store in Charlotte</h2>
            <Container style={{ marginTop: "40px", textAlign: "center" }}>
                <Row md={4} style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly"}}>
                    <Col>
                        <Card>
                            <Card.Body>Food Lion</Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6}>
                        <Card>
                            <Card.Body>Harris Teeter</Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>The Fresh Market</Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row md={4} style={{ marginTop: "2vw", borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly"}}>
                    <Col>
                        <Card>
                            <Card.Body>Food Lion</Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6}>
                        <Card>
                            <Card.Body>Harris Teeter</Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>The Fresh Market</Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row md={4} style={{ marginTop: "2vw", borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly"}}>
                    <Col>
                        <Card>
                            <Card.Body>Food Lion</Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6}>
                        <Card>
                            <Card.Body>Harris Teeter</Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>The Fresh Market</Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Locations

