import React from 'react'

import Container from 'react-bootstrap/Container'

import FlechaIndia from '../../../assets/images/FlechaIndia.png'

import { IndianArrows as IndianArrowsClass } from './Profile.module.css'

const IndianArrows = () => {
   return (
     <>
       <Container>
         <img src={FlechaIndia} alt="Flecha India" className={IndianArrowsClass} />
         <img src={FlechaIndia} alt="Flecha India" className={IndianArrowsClass} />
         <img src={FlechaIndia} alt="Flecha India" className={IndianArrowsClass} />
       </Container>
     </>
   )
}

export default IndianArrows