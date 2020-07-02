import React, { useState } from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { useAppContext } from '../../context/Context'
import { request } from 'graphql-request'

import { compareSync } from 'bcryptjs'

import { FormProps, FormLabel, FormControl, FormTextMuted, FormCheck, LogginFailed } from './FormLanding.module.css'

const FormLanding = () => {

  const [RenderLoggin, setRenderLoggin] = useState(true)
  const [FormParams, setFormParams] = useState({ Username: null, Email: null, Password: null })
  const [FormState, setFormState] = useState({ Loggin: null, Username: null, Email: null, Password: null })

  const { setUser } = useAppContext()

  const SubmitForm = e => {
    e.preventDefault()

    if (RenderLoggin) {
      if (!FormParams.Email || !FormParams.Password) {
        setFormState({ ...FormState, Loggin: 'Los Campos Requeridos No Pueden Estar Vacios.' })
      } else {
        setFormState({ ...FormState, Loggin: null })

        let Query = `
          {
            GetUser(Email: "${FormParams.Email}") {
              _id Username Email Password Image Level Bio Ranking Name LastName DNI BornDate
              Gender Nacionality Phone Address CP Locality State Width Weight Complexion
              HairColor Profession Drinker Smoker Sports UserSports Zodiac Interests Languages
            }
          }
        `
        request("/graphql", Query).then(data => {
          const { _id, Username, Email, Password, Image, Level, Bio, Ranking, Name, LastName, DNI, 
            BornDate, Gender, Nacionality, Phone, Address, CP, Locality, State, Width, Weight, Complexion,
            HairColor, Profession, Drinker, Smoker, Sports, UserSports, Zodiac, Interests, Languages } = data.GetUser || ''

          if (Username && Password && compareSync(FormParams.Password, Password)) {
            setUser({ Id: _id, Username, Email, Image, Level, Bio, Ranking, Name, LastName, DNI, 
              BornDate, Gender, Nacionality, Phone, Address, CP, Locality, State, Width, Weight, Complexion,
              HairColor, Profession, Drinker, Smoker, Sports, UserSports, Zodiac, Interests, Languages })
          }
          else setFormState({ ...FormState, Loggin: 'El Email O La Contraseña Son Incorrectos.' })
        })
      }
    } else {
      let Query = `
        mutation {
          AddUser(Username: "${FormParams.Username}", Email: "${FormParams.Email}", Password: "${FormParams.Password}") {
            _id Username Email Password Image Level Bio Ranking Name LastName DNI BornDate
            Gender Nacionality Phone Address CP Locality State Width Weight Complexion
            HairColor Profession Drinker Smoker Sports UserSports Zodiac Interests Languages
          }
        }
      `
      request("/graphql", Query)
        .then(data => {
          const { _id, Username, Email, Image, Level, Bio, Ranking, Name, LastName, DNI, 
            BornDate, Gender, Nacionality, Phone, Address, CP, Locality, State, Width, Weight, Complexion,
            HairColor, Profession, Drinker, Smoker, Sports, UserSports, Zodiac, Interests, Languages } = data.AddUser || ''

          setUser({ Id: _id, Username, Email, Image, Level, Bio, Ranking, Name, LastName, DNI, 
            BornDate, Gender, Nacionality, Phone, Address, CP, Locality, State, Width, Weight, Complexion,
            HairColor, Profession, Drinker, Smoker, Sports, UserSports, Zodiac, Interests, Languages })
        })
        .catch(error => {
          const { message } = error.response.errors[0] || ''
        
          let Errors = { Loggin: null, Username: null, Email: null, Password: null }
          if (!FormParams.Username || !FormParams.Email || !FormParams.Password) Errors = { ...Errors, Loggin: 'Los Campos Requeridos No Pueden Estar Vacios.'}
          else Errors = { ...Errors, Loggin: null }
          if (message.includes('Username:')) Errors = { ...Errors, Username: 'Usuario: Debe Contener Una Longitud De 4 A 16 Caracteres Alfanumericos.' }
          else if (message.includes('Disponibilidad')) Errors = { ...Errors, Username: 'Disponibilidad: El Usuario Ya Se Encuentra Registrado.' }
          else Errors = { ...Errors, Username: null }
          if (message.includes('Email:')) Errors = { ...Errors, Email: 'Email: Debe Ser De Formato: example@example.com | example@example.com.mx.' }
          else Errors = { ...Errors, Email: null }
          if (message.includes('Password:')) Errors = { ...Errors, Password: 'Password: Debe Contener Una Longitud De 8 A 20 Caracteres, Almenos Una Letra Mayuscula, Una Letra Minuscula, Un Numero Y Un Caracter Especial.' }
          else Errors = { ...Errors, Password: null }
          setFormState({ ...FormState, Loggin: Errors.Loggin, Username: Errors.Username, Email: Errors.Email, Password: Errors.Password })
        })
    }

  }

  return (
    <>
      <Form className={FormProps} onSubmit={e => SubmitForm(e)}>
        {!RenderLoggin &&
        <Form.Group controlId="formBasicUsername">
          <Form.Label className={FormLabel}>Nombre De Usuario:</Form.Label>
          <Form.Control className={FormControl} name="Username" type="text" placeholder="Usuario" value={FormParams.Username || ''} onChange={e => setFormParams({...FormParams, [e.target.name]: e.target.value})}/>
        </Form.Group>}

        <Form.Group controlId="formBasicEmail">
          <Form.Label className={FormLabel}>Correo Electronico:</Form.Label>
          <Form.Control className={FormControl} name="Email" type="email" placeholder="Email" value={FormParams.Email || ''} onChange={e => setFormParams({...FormParams, [e.target.name]: e.target.value})}/>

        <Form.Text className={FormTextMuted}>
            Nunca Compartas Tu Correo Electronico.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
        <Form.Label className={FormLabel}>Contraseña:</Form.Label>
          <Form.Control className={FormControl} name="Password" type="password" placeholder="Password" onChange={e => setFormParams({...FormParams, [e.target.name]: e.target.value})}/>
        </Form.Group>

        {RenderLoggin &&
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check className={FormCheck} type="checkbox" label="MANTENERME CONECTADO" defaultChecked />
        </Form.Group>}

        {RenderLoggin && FormState.Loggin && <>
        <Form.Text className={LogginFailed}>
          {FormState.Loggin && FormState.Loggin}
        </Form.Text>
        <br /> </>}

        {!RenderLoggin && (FormState.Username || FormState.Email || FormState.Password) && <>
        <Form.Text className={LogginFailed}>
          {FormState.Username && FormState.Username}
        </Form.Text>

        <Form.Text className={LogginFailed}>
          {FormState.Email && FormState.Email}
        </Form.Text>

        <Form.Text className={LogginFailed}>
          {FormState.Password && FormState.Password}
        </Form.Text>
        <br /> </>}

        {RenderLoggin ?
        <Button name="Ingresar" type="submit" variant="success">INICIAR</Button>
        :
        <Button name="Registrarse" type="submit" variant="success">REGISTRARME</Button>}

        <span className="mr-2"></span>

        {!RenderLoggin ?
        <Button variant="danger" onClick={() => setRenderLoggin(true)}>CANCELAR</Button>
        :
        <>
        <Button variant="danger">CANCELAR</Button>
        <Row>
          <Col>
            <br />
            <Button onClick={() => setRenderLoggin(false)} variant="outline-light">CREAR CUENTA</Button>
          </Col>
        </Row> </>}
      </Form>
    </>
  )
}

export default FormLanding