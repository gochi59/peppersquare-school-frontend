import React from "react";
import { Button, Card, CardGroup } from "react-bootstrap";

const CardContainer = () => {
  return (
    <div>
      <CardGroup>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="src/assets/OIP.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="src/assets/OIP.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default CardContainer;
