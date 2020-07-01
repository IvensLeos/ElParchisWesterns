import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Button from 'react-bootstrap/Button'

import PlayerCard from './Profile/PlayerCard'

import { Link } from 'react-router-dom'

import { BackgroundProps, TabsProps, TabProps } from './BodyDashboard.module.css'
import './BodyDashboard.css'

const BodyDashboard = () => {
  
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={2}></Col>
          <Col>
            <Container className={BackgroundProps}>
              <Tabs fill variant="tabs" defaultActiveKey="PERFIL" id="DashboardTabs" className={TabsProps}>
                <Tab eventKey="PERFIL" title="MI PERFIL" className={TabProps}>
                  <PlayerCard />
                </Tab>
                <Tab eventKey="MENSAJES" title="MENSAJES" className={TabProps}>
                  <h2>MENSAJES</h2>
                </Tab>
                <Tab eventKey="CAJERO" title="CAJERO" className={TabProps}>
                  <h2>CAJERO</h2>
                </Tab>
                <Tab eventKey="TIENDA" title="TIENDA" className={TabProps}>
                  <h2>TIENDA</h2>
                </Tab>
                <Tab eventKey="JUGAR" title="JUGAR" className={TabProps}>
                  <Link to="playzone">
                    <Button>IR AL TABLERO</Button>
                  </Link>
                </Tab>
                <Tab eventKey="AYUDA" title="AYUDA" className={TabProps}>
                  <h2>AYUDA</h2>
                </Tab>
              </Tabs>
            </Container>
          </Col>
          <Col xs={2}></Col>
        </Row>
      </Container>
    </>
  )  
}

export default BodyDashboard