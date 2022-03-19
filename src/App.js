import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import CartPlusIcon from "./components/CartPlusIcon";

function App() {
  const DiscountAmount = "20%"

  const handleClick = () => {
    console.log("Clicked");
  }

  return (
    <Container className="custom-jumbotron py-5 text-center">
      <Row className="py-lg-5">
        <Col lg={6} md={8} className="mx-auto">
          <h1 className="fw-light">Limited Time Discount</h1>
          <p className="subtext lead text-muted">Get <span className="fw-bold">{DiscountAmount}</span> OFF! when you shop today!</p>
          <Button onClick={handleClick} variant="dark">Shop Now <CartPlusIcon/></Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
