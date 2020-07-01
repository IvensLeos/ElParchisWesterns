import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import CheckoutForm from './CheckoutForm'

const Checkout = () => {
   return (
     <>
      <Container>
        <Row>
          <Col xs={3} />
          <Col xs={6}>
            <CheckoutForm />
            <br />
            <Button>RECARGAR $25</Button>
          </Col>
          <Col xs={3} />
        </Row>
      </Container>
     </>
   )
}

export default Checkout