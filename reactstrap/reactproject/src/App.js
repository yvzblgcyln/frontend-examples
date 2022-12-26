import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

function App() {
  return (
    <div >
      <Container>
        <Row>
          <h1>hello world</h1>
        </Row>
        <Row>
          <Col xs="6">
            <ListGroup>
              <ListGroupItem>
                Cras justo odio
              </ListGroupItem>
              <ListGroupItem>
                Dapibus ac facilisis in
              </ListGroupItem>
              <ListGroupItem>
                Morbi leo risus
              </ListGroupItem>
              <ListGroupItem>
                Porta ac consectetur ac
              </ListGroupItem>
              <ListGroupItem>
                Vestibulum at eros
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col xs="6">
            <ListGroup numbered>
              <ListGroupItem>
                Cras justo odio
              </ListGroupItem>
              <ListGroupItem>
                Dapibus ac facilisis in
              </ListGroupItem>
              <ListGroupItem>
                Morbi leo risus
              </ListGroupItem>
              <ListGroupItem>
                Porta ac consectetur ac
              </ListGroupItem>
              <ListGroupItem>
                Vestibulum at eros
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
