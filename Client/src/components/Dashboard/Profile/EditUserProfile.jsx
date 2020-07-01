import React, { useState } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Estrellita from '../../../assets/images/Estrellita.png'
import FlechaIndia from '../../../assets/images/FlechaIndia.png'

import Ranking from './Ranking'
import InfoProfile from './InfoProfile'
import InfoForm from './InfoForm'

import { StepArrow, StepStrings, FontedTitle, IndianArrows } from './Profile.module.css'

const EditUserProfile = props => {
  const { User, setEditProfile } = props
  const [StepEdit, setStepEdit] = useState(false)

  return (
    <>
    <Row>
      <Col xs={3}>
        {!StepEdit ?
        <p onClick={() => setEditProfile(false)} className={`${StepStrings} mr-5`}><span className={StepArrow}>&lt;&lt;</span> ATRAS</p>
        :
        <p onClick={() => setStepEdit(false)} className={`${StepStrings} mr-5`}><span className={StepArrow}>&lt;&lt;</span> ATRAS</p>}
      </Col>
      <Col xs={6}>
        <h1 className={FontedTitle}>
          <img src={Estrellita} alt="Estrella" className="mr-1" />
            MI PERFIL
          <img src={Estrellita} alt="Estrella" className="ml-1" />
        </h1>
      </Col>
      <Col xs={3}>
        {!StepEdit && <p onClick={() => setStepEdit(true)} className={`${StepStrings} ml-1`}>SIGUIENTE <span className={StepArrow}>&gt;&gt;</span></p>}
      </Col>
    </Row>
    <Row className="mx-auto">
      <Col xs={5}>
        <Ranking User={User} />
        <InfoProfile User={User} />
      </Col>
      <Col xs={1}>
        <Container>
            <img src={FlechaIndia} alt="Flecha India" className={IndianArrows}/>
            <img src={FlechaIndia} alt="Flecha India" className={IndianArrows}/>
            <img src={FlechaIndia} alt="Flecha India" className={IndianArrows}/>
        </Container>
      </Col>
      <Col xs={6}>
        <InfoForm User={User} StepEdit={StepEdit} />
      </Col>
    </Row>
  </>
  )
}

export default EditUserProfile