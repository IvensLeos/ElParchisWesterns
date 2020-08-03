import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Logo from '../../assets/images/Logo.png'
import Inicio from '../../assets/images/Inicio.png'

import FormLanding from './FormLanding'

import { ContainerLogoProps, LogoProps, InicioProps, FormProps } from './BodyLanding.module.css'
import './BodyLanding.module.css'

const BodyLanding = () => {
  return (
    <>
      <Container fluid>
        <Row className="mt-5">
          <Col>
            <Container className={ContainerLogoProps}>
              <img src={Logo} alt="Logo" className={LogoProps} />
            </Container>
          </Col>
          <Col>
            <Container className={FormProps}>
              <Row>
                <Col xs={3}></Col>
                <Col>
                  <Container>
                    <>
                      <img src={Inicio} alt="Inicio" className={InicioProps} />
                      <FormLanding />
                    </>
                  </Container>
                </Col>
                <Col xs={3}></Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default BodyLanding