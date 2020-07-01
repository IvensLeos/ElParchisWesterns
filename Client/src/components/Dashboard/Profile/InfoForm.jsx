import React, { useState } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

import DefaultImage from '../../../assets/images/DefaultPerfil.png'

import { AdvisorProps, Labels, InputsRight, ElementsProps, RadioProps, MakePicture, UploadPicture } from './Profile.module.css'

const InfoForm = (props) => {

  const { Username, Width, Weight, Complexion, HairColor, Profession, 
    Drinker, Smoker, Sports, UserSports, Zodiac, Interests, Languages } = props.User

  const { StepEdit } = props

  const [ProfileImage, setProfileImage] = useState({ Image: props.User.Image || DefaultImage })

  const HandleImageChange = (e) => {
    try {
      let reader = new FileReader()
      reader.onload = (e) => setProfileImage({ Image: e.target.result })
      reader.readAsDataURL(e.target.files[0])
    } catch (error) {
      alert(error)
    }
  }

  const HandleFormSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <Form onSubmit={(e) => HandleFormSubmit(e)}>
        <Container fluid style={{ display: `${StepEdit ? 'none' : 'block'}`, margin: '0', padding: '0', marginTop: '40px', marginLeft: '-5px' }}>
          <Row>
            <Col >
              <p className={AdvisorProps}>RELLENE EL FORMULARIO (NO OBLIGATORIO):</p>
            </Col>
          </Row>
          <Row>
            <Col xs={4} className={ElementsProps}>
              <Form.Group>
                <Form.Label className={Labels}>ALTURA (METROS)</Form.Label>
                <Form.Control className={InputsRight} name="Width" type="text" placeholder="m" defaultValue={Width} />
              </Form.Group>
            </Col>
            <Col xs={4} className={ElementsProps}>
              <Form.Group>
                <Form.Label className={Labels}>PESO (KILOS)</Form.Label>
                <Form.Control className={InputsRight} name="Weight" type="text" placeholder="Kg" defaultValue={Weight} />
              </Form.Group>
            </Col>
            <Col xs={4} className={ElementsProps}>
              <Form.Group>
                <Form.Label className={Labels}>COMPLEXION</Form.Label>
                <Form.Control className={InputsRight} name="Complexion" type="text" placeholder="Delgada | Robusta" defaultValue={Complexion} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs={4} className={ElementsProps}>
              <Form.Group>
                <Form.Label className={Labels}>COLOR DE PELO</Form.Label>
                <Form.Control className={InputsRight} name="HairColor" type="text" placeholder="Castaño" defaultValue={HairColor} />
              </Form.Group>
            </Col>
            <Col xs={8} className={ElementsProps}>
              <Form.Group>
                <Form.Label className={Labels}>PROFESION</Form.Label>
                <Form.Control className={InputsRight} name="Profession" type="text" placeholder="Ing. Civil | Lic. Administracion" defaultValue={Profession} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs={4} className={ElementsProps}>
              <Form.Group>
                <Row>
                  <Col>
                    <Form.Label className={Labels}>¿BEBES?</Form.Label>
                  </Col>
                </Row>
                <Row className={RadioProps}>
                  <Col>
                    <Form.Check className="ml-3" type="radio" label="SI" value="Si Bebo" name="Drinker" id="DrinkRadios1" defaultChecked={Drinker} />
                  </Col>
                  <Col>
                    <Form.Check className="mr-5" type="radio" label="NO" value="No Bebo" name="Drinker" id="DrinkRadios2" defaultChecked={!Drinker} />
                  </Col>
                </Row>
              </Form.Group>
            </Col>
            <Col xs={4} className={ElementsProps}>
              <Form.Group>
                <Row>
                  <Col>
                    <Form.Label className={Labels}>¿FUMAS?</Form.Label>
                  </Col>
                </Row>
                <Row className={RadioProps}>
                  <Col>
                    <Form.Check className="ml-3" type="radio" label="SI" value="Si Fumo" name="Smoker" id="SmokeRadios1" defaultChecked={Smoker} />
                  </Col>
                  <Col>
                    <Form.Check className="mr-5" type="radio" label="NO" value="No Fumo" name="Smoker" id="SmokeRadios2" defaultChecked={!Smoker} />
                  </Col>
                </Row>
              </Form.Group>
            </Col>
            <Col xs={4} className={ElementsProps}>
              <Form.Group>
                <Row>
                  <Col style={{ padding: '0', margin: '0' }}>
                    <Form.Label className={Labels}>¿HACES DEPORTE?</Form.Label>
                  </Col>
                </Row>
                <Row className={RadioProps}>
                  <Col>
                    <Form.Check className="ml-3" type="radio" label="SI" value="Si Hago Deporte" name="Sports" id="SportsRadios1" defaultChecked={Sports}/>
                  </Col>
                  <Col>
                    <Form.Check className="mr-5" type="radio" label="NO" value="No Hago Deporte" name="Sports" id="SportsRadios2" defaultChecked={!Sports} />
                  </Col>
                </Row>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs={7} className={ElementsProps}>
              <Form.Group>
                <Form.Label className={Labels}>¿QUE DEPORTE PRACTICAS?</Form.Label>
                <Form.Control className={InputsRight} name="UserSports" type="text" placeholder="Soccer | Basketball | Tenis" defaultValue={UserSports} />
              </Form.Group>
            </Col>
            <Col xs={5} className={ElementsProps}>
              <Form.Group>
                <Form.Label className={Labels}>SIGNO (ZODIACO)</Form.Label>
                <Form.Control className={InputsRight} name="Zodiac" as="select" defaultValue={Zodiac}>
                  <option>ARIES</option>
                  <option>TAURO</option>
                  <option>GÉMINIS</option>
                  <option>CANCER</option>
                  <option>LEO</option>
                  <option>VIRGO</option>
                  <option>LIBRA</option>
                  <option>ESCORPIO</option>
                  <option>SAGITARIO</option>
                  <option>CAPRICORNIO</option>
                  <option>ACUARIO</option>
                  <option>PISCIS</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs={7} className={ElementsProps}>
              <Form.Group>
                <Form.Label className={Labels}>INTERESES Y AFICIONES</Form.Label>
                <Form.Control className={InputsRight} name="Interests" type="text" placeholder="Leer | Cantar | Pasear" defaultValue={Interests}/>
              </Form.Group>
            </Col>
            <Col xs={5} className={ElementsProps}>
              <Form.Group>
                <Form.Label className={Labels}>IDIOMAS</Form.Label>
                <Form.Control className={InputsRight} name="Languages" as="select" defaultValue={Languages}>
                  <option>ESPAÑOL</option>
                  <option>INGLES</option>
                  <option>FRANCES</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
        </Container>
        <Container fluid style={{ display: `${StepEdit ? 'block' : 'none'}`, margin: '0', padding: '0', marginTop: '40px', marginLeft: '-5px' }}>
          <Row>
            <Col className={ElementsProps}>
              <p className={AdvisorProps}>CREE SU AVATAR UNICO EN POCOS PASOS:</p>
            </Col>
          </Row>
          <Row>
            <Col xs={8} className={ElementsProps}>
              <Form.Group>
                <Form.Label className={Labels}>NICKNAME (MAXIMO 14 CARACTERES)</Form.Label>
                <Form.Control className={InputsRight} name="Nickname" type="text" maxLength="14" placeholder="Usuario" defaultValue={Username} />
              </Form.Group>
            </Col>
            <Col xs={4}>
              <Form.Group>
                <Form.Label className={Labels}>CONTRASEÑA</Form.Label>
                <Form.Control className={InputsRight} name="Password" type="password" placeholder="Password" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs={8} className={ElementsProps}>
            <Image roundedCircle variant="top" src={ProfileImage.Image} className="mx-auto mt-1" style={{ maxWidth: '250px', maxHeight: '260px'}} />
            </Col>
            <Col xs={4}>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label className={Labels}>REPETIR CONTRASEÑA</Form.Label>
                    <Form.Control className={InputsRight} name="Password2" type="password" placeholder="Password" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button variant="outline-light" className={MakePicture}>HACER UNA FOTO</Button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <input type="file" accept="image/*" id="UploadImage" name="UploadImage" style={{ display: 'none' }} onChange={(e) => HandleImageChange(e)} />
                  <Button variant="outline-light" className={UploadPicture} onClick={() => document.getElementById("UploadImage").click()}>SUBIR UNA FOTO</Button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button type="submit" variant="success" className="mt-3">GUARDAR</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Form>
    </>
  )
}

export default InfoForm