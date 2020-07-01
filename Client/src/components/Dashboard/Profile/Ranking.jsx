import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Ranking0 from '../../../assets/images/Ranking0.png'
import Ranking1 from '../../../assets/images/Ranking1.png'

import { RankingString, RankingImage } from './Profile.module.css'

const CreateRankings = (props) => {

   const { Ranking } = props

   let Component = []
   for (let i = 1; i <= 5; i++) {
      Component.push(
         <Col xs={2} key={i}>
            {(i <= Ranking) ? 
               <img src={Ranking1} alt="Ranking1" className={RankingImage} /> 
               : 
               <img src={Ranking0} alt="Ranking0" className={RankingImage} />
            }
         </Col>
      )
   }

   return Component
}

const Ranking = (props) => {

   const { Ranking } = props.User

   return (
      <>
         <Row>
            <h6 className={RankingString}>RANKING</h6>
         </Row>
         <Row className="mr-4">
            <CreateRankings Ranking={Ranking} />
         </Row>
      </>
   )
}

export default Ranking