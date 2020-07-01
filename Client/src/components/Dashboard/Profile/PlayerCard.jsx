import React, { useState } from 'react'

import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

import DefaultImage from '../../../assets/images/DefaultPerfil.png'

import EditUserProfile from './EditUserProfile'
import LogoutSession from './LogoutSession'

import { useAppContext } from '../../../context/Context'

import { BioProps } from './Profile.module.css'

const PlayerCard = () => {

  const { User, setUser } = useAppContext()
  
  const [EditProfile, setEditProfile] = useState(false)
  const [Logout, setLogout] = useState(false)

  if (!EditProfile && !Logout) {
    return (
      <Card text="white" style={{ width: '100%', backgroundColor: 'transparent' }}>
          <Card.Header><h4>TARJETA DEL JUGADOR</h4></Card.Header>
          <Image roundedCircle variant="top" src={User.Image || DefaultImage} className="mx-auto" style={{ maxWidth: '390px', maxHeight: '310px'}} />
          <Card.Body>
            <Card.Title>{User.Username}</Card.Title>
              <Card.Text>
                <strong>({User.Level})</strong>
              </Card.Text>
              <Card.Text className={BioProps}>
                "{User.Bio}"
              </Card.Text>
              <Button variant="info" className="mt-1 mr-2" onClick={() => setEditProfile(true)}>EDITAR PERFIL</Button>
              <Button variant="danger" className="mt-1" onClick={() => setLogout(true)}>CERRAR SESSION</Button>
          </Card.Body>
      </Card>
    )
  }
  else if (EditProfile && !Logout) {
    return <EditUserProfile setEditProfile={setEditProfile} User={User} setUser={setUser} />
  }
  else return <LogoutSession setUser={setUser} />
}

export default PlayerCard