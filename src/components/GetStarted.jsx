import { Container, Card, Button } from "react-bootstrap";
import barbsHeader from "../images/barbs-header.png";
import React from "react";

export default function GetStarted() {
  return (
    <div id="get-started">
      <Container className="container mt-2">
        <div className="row align-items-center justify-content-center flex-md-row flex-column">
          <div className="col my-2">
            <Card text="white" bg="dark" className="light-rounded-box">
              <div className="rounded-image-top">
                <Card.Img variant="top" src={barbsHeader} alt="Portfolio" />
              </div>
              <Card.Body
                className="d-flex flex-column align-items-center"
                style={{
                  fontSize: "0.8rem",
                  padding: "0.5rem",
                  maxHeight: "150px",
                }}
              >
                <Card.Title className="text-center">
                  Barber Appointer
                </Card.Title>
                <Button variant="danger my-2 px-4">Live</Button>
                <Button
                  variant="secondary my-2 px-4"
                  href="https://github.com/gian-tiqui/Barber-Appointer"
                >
                  Code
                </Button>
              </Card.Body>
            </Card>
          </div>

          <div className="col my-2">
            <Card text="white" bg="dark">
              <Card.Img variant="top" src={barbsHeader} alt="Portfolio" />
              <Card.Body
                className="d-flex flex-column align-items-center"
                style={{
                  fontSize: "0.8rem",
                  padding: "0.5rem",
                  maxHeight: "150px",
                }}
              >
                <Card.Title className="text-center">
                  Barber Appointer
                </Card.Title>
                <Button variant="danger my-2 px-4">Live</Button>
                <Button
                  variant="secondary my-2 px-4"
                  href="https://github.com/gian-tiqui/Barber-Appointer"
                >
                  Code
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}
