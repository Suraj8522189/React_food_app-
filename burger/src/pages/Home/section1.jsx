import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Section1() {
  return (
    <section className="hero_section">
        <Container>
        <Row>
           
            <Col lg={5}>
            <div className="hero_text text-start">
                <h1 className="text-white">New Pizza</h1>
                 <h2 className="text-white">With Mushroom </h2>
                  <p className="text-white pt-2 pb-4">Plakat Tasty pizza with cherries, onions and mushrooms on a black background and various ingredients
                </p>
                <Link to="/" className="btn order_now">
                Order Now
                </Link>
            </div>
            </Col>
             <Col lg={7} className="mb-5 mb-lg-0">
            <div className="position-relative">
                <div className="price_badge">
                    <div className="badge_text">
                    <h4 className="h4_xs">Only</h4>
                     <h4 className="h3_lg">Rs.99</h4>
                    </div>
                </div>
            </div>
            </Col>
              
        </Row>
        </Container>
    </section>
  )
}

export default Section1