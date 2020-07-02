import React from 'react'
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

function LandingPageComponent({history}) {
  return (
    <div>
      <Container>
        <Jumbotron>
          <h1>Hello, world!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <p>
            <Button onClick={() => history.push("/categories")} variant="primary">Categories</Button>
          </p>
        </Jumbotron>
      </Container>
    </div>
  );
}

export default LandingPageComponent
