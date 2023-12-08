import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import InstaImg from '../Instacart.png'

function Topbar () {
    return (
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                    alt="Instacart Logo"
                    src={InstaImg}
                    width="180"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '}
                </Navbar.Brand>
        {/* location search form */}
        <Form inline style={{"width":"60vw"}}>
            <InputGroup>
                <Form.Control
                    placeholder="Search products and stores"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
        </Form>
        {/* login/setup links */}
        <Nav className="justify-content-end" activeKey="/home">
            <Nav.Item>
                <Nav.Link href="/home">Login</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Signup</Nav.Link>
            </Nav.Item>
        </Nav>
        </Container>
        </Navbar>
    )
}


export default Topbar