import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import { EditDataButton, ContainerEditData, FormEditProps, Labels, InputProps } from './Profile.module.css'

const InfoProfile = (props) => {

   const { Email, Name, LastName, DNI, BornDate, Gender, Nacionality, 
      Phone, Address, CP, Locality, State } = props.User

   return (
      <>
         <Row>
            <Button variant="light" className={EditDataButton}>EDITAR MIS DATOS</Button>
         </Row>
         <Row className={ContainerEditData}>
            <Container className={FormEditProps}>
               <Row>
                  <Col style={{ padding: '0px' }}>
                     <p className={Labels}>NOMBRE</p> 
                     <input type="text" defaultValue={Name} className={InputProps} style={{ maxWidth: '95px' }} />
                  </Col>
               </Row>
               <Row>
                  <Col style={{ padding: '0px' }}>
                     <p className={Labels}>APELLIDOS</p> 
                     <input type="text" defaultValue={LastName} className={InputProps} style={{ maxWidth: '110px' }} />
                  </Col>
               </Row>
               <Row>
                  <Col style={{ padding: '0px' }}>
                     <p className={Labels}>DNI</p> 
                     <input type="text" defaultValue={DNI} className={InputProps} style={{ maxWidth: '90px' }} />
                     <p className={Labels}>NACIMIENTO</p> 
                     <input type="text" defaultValue={BornDate} className={InputProps} style={{ maxWidth: '80px' }} />
                  </Col>
               </Row>
               <Row>
                  <Col style={{ padding: '0px' }}>
                     <p className={Labels}>SEXO</p>
                     <input type="text" defaultValue={Gender} className={InputProps} style={{ maxWidth: '70px' }} />
                  </Col>
               </Row>
               <Row>
                  <Col style={{ padding: '0px' }}>
                     <p className={Labels}>NACIONALIDAD</p>
                     <input type="text" defaultValue={Nacionality} className={InputProps} style={{ maxWidth: '80px' }} />
                  </Col>
               </Row>
               <Row>
                  <Col style={{ padding: '0px' }}>
                     <p className={Labels}>EMAIL</p>
                     <input type="text" defaultValue={Email} className={InputProps} style={{ maxWidth: '170px' }} readOnly />
                  </Col>
               </Row>
               <Row>
                  <Col style={{ padding: '0px' }}>
                     <p className={Labels}>TELEFONO</p>
                     <input type="text" defaultValue={Phone} className={InputProps} style={{ maxWidth: '90px' }} />
                  </Col>
               </Row>
               <Row>
                  <Col style={{ padding: '0px' }}>
                     <p className={Labels}>DIRECCION</p>
                     <input type="text" defaultValue={Address} className={InputProps} style={{ maxWidth: '250px' }} />
                  </Col>
               </Row>
               <Row>
                  <Col style={{ padding: '0px' }}>
                     <p className={Labels}>CP</p>
                     <input type="text" defaultValue={CP} className={InputProps} style={{ maxWidth: '50px' }} />
                     <p className={Labels}>LOCALIDAD</p>
                     <input type="text" defaultValue={Locality} className={InputProps} style={{ maxWidth: '70px' }} />
                  </Col>
               </Row>
               <Row>
                  <Col style={{ padding: '0px' }}>
                     <p className={Labels}>PROVINCIA</p>
                     <input type="text" defaultValue={State} className={InputProps} style={{ maxWidth: '95px' }} />
                  </Col>
               </Row>
            </Container>
         </Row>
      </>
   )
}

export default InfoProfile