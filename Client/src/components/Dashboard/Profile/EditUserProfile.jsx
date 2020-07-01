import React, { useState } from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Ranking from './Ranking'
import InfoProfile from './InfoProfile'
import InfoForm from './InfoForm'
import IndianArrows from './IndianArrows'
import FontedTitle from './FontedTitle'

import { StepArrow, StepStrings } from './Profile.module.css'

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
        <FontedTitle Title="MI PERFIL" />
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
        <IndianArrows />
      </Col>
      <Col xs={6}>
        <InfoForm User={User} StepEdit={StepEdit} />
      </Col>
    </Row>
  </>
  )
}

export default EditUserProfile