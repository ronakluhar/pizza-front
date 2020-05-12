import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'

const Banner = () => (
  <div className="banner">
    <Container>
      <Row className="align-items-center jusitfy-content-between">
        <Col md={6}>
          <div className="info">
            <h1>Cheese n Corn</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <Button className="btn-more">More Details</Button>
          </div>
        </Col>
        <Col md={6}>
          <img
            src="http://pngimg.com/uploads/pizza/pizza_PNG44084.png"
            alt="pizza"
          />
        </Col>
      </Row>
    </Container>
  </div>
)

export default Banner
