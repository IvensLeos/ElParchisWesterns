import React from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { FormInputLabels } from './Help.module.css'

const HelpForm = () => {
   return (
     <>
      <Form>
         <Form.Group controlId="formBasicUsername">
           <Form.Label className={FormInputLabels}>NICKNAME O CORREO ELECTRONICO</Form.Label>
           <Form.Control type="text" placeholder="Tu Nickname/Email Aqui.." />
         </Form.Group>
         <Form.Group controlId="formBasicText">
           <Form.Label className={FormInputLabels}>MENSAJE:</Form.Label>
           <Form.Control as="textarea" rows="10" placeholder="Tu Mensaje Aqui..." />
         </Form.Group>
         <Button variant="success" size="lg">ENVIAR</Button>
      </Form>
     </>
   )
}

export default HelpForm
