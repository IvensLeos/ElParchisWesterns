import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import HelpForm from './HelpForm'
import HelpAdvise from './HelpAdvise'

import IndianArrows from '../Profile/IndianArrows'
import FontedTitle from '../Profile/FontedTitle'

const HelpUser = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={4} style={{ margin: '0', padding: '0' }}>
            <FontedTitle Title="AYUDA ONLINE" />
          </Col>
          <Col xs={1} />
          <Col xs={7}>
            <FontedTitle Title="RESPONSABLE" />
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <br />
            <HelpForm />
          </Col>
          <Col xs={1}>
            <IndianArrows />
          </Col>
          <Col xs={7} className="mt-2">
            <HelpAdvise />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default HelpUser