import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card } from "react-bootstrap";

const CardContainer = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="row row-cols-1 row-cols-md-2 g-4 w-75 m-3 mb-4 pb-3">
        <div className="col d-flex justify-content-center">
          <Card className="border shadow-sm rounded-4 w-100" >
            <Card.Img src="src/assets/OIP.jpg" className="rounded-top-4" alt="..." />
            <Card.Body>
              <Card.Title className="text-center">Card title</Card.Title>
            </Card.Body>
            <Card.Footer className="text-center">
              <small className="text-muted">
                <FontAwesomeIcon icon={faCalendar} color="#51bcd2" /> Last updated 3 mins ago
              </small>
            </Card.Footer>
          </Card>
        </div>
        <div className="col d-flex justify-content-center">
          <Card className="border shadow-sm rounded-4 w-100" >
            <Card.Img src="src/assets/OIP.jpg" className="rounded-top-4" alt="..." />
            <Card.Body>
              <Card.Title className="text-center">Card title</Card.Title>
            </Card.Body>
            <Card.Footer className="text-center">
              <small className="text-muted">
                <FontAwesomeIcon icon={faCalendar} color="#51bcd2" /> Last updated 3 mins ago
              </small>
            </Card.Footer>
          </Card>
        </div>
        <div className="col d-flex justify-content-center">
          <Card className="border shadow-sm rounded-4 w-100" >
            <Card.Img src="src/assets/OIP.jpg" className="rounded-top-4" alt="..." />
            <Card.Body>
              <Card.Title className="text-center">Card title</Card.Title>
            </Card.Body>
            <Card.Footer className="text-center">
              <small className="text-muted">
                <FontAwesomeIcon icon={faCalendar} color="#51bcd2" /> Last updated 3 mins ago
              </small>
            </Card.Footer>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
