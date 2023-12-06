import './App.css';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

function App() {
  return (
    <div className="App">
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="Instacart Logo"
              src='/Instacart.png'
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
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
    </> 
  

      <h1>Hello World</h1>
    </div>
  );
}

export default App;
