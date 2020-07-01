import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Sketch from 'react-p5'

import Tablero from '../assets/images/Tablero.png'

const PlayzonePage = () => {

   let BackgroundImage

   const preload = p5 => {
      BackgroundImage = p5.loadImage(Tablero)
   }

   const setup = (p5, canvasParentRef) => {
      p5.createCanvas(720, 720).parent(canvasParentRef) //use parent to render canvas in this ref (without that p5 render this canvas outside your component)
   }

   const draw = p5 => {
      p5.imageMode(p5.CORNER)
      p5.background(BackgroundImage)
      p5.textFont('monospace')
      p5.textSize(15.5)
      p5.textAlign(p5.CENTER, p5.CENTER)
      p5.fill(255)
      p5.text('PLAYER 1', 120, 29)
      p5.text('PLAYER 2', 580, 29)
      p5.text('PLAYER 3', 120, 694)
      p5.text('PLAYER 4', 580, 694)
   }

   return (
      <Container fluid style={{ textAlign: 'center'}}>
         <Row>
            <Col xs={6}>
               <Sketch setup={setup} draw={draw} preload={preload} />
            </Col>
            <Col xs={6}>
            </Col>
         </Row>
      </Container>
   )
}

export default PlayzonePage