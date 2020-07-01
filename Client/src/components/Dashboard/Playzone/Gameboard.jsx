import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Sketch from './Sketch'

const Gameboard = () => {
  return (
    <>
      <Container fluid style={{ textAlign: 'center' }}>
        <Row>
          <Col className="mt-4">
            <Sketch />
          </Col>
          <Col>
            {/* <h1>CONTENT HERE</h1> */}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Gameboard