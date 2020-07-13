import React, { useState, useEffect } from 'react'

import IO from 'socket.io-client'
import Button from 'react-bootstrap/Button'

//`ws://${window.location.host}`, 

const SocketIO = IO({ autoConnect: true })

const Chat = () => {

  const [Messages, setMessages] = useState([]) 
  const [NewMessage, setNewMessage] = useState({})
  
  useEffect(() => {

    SocketIO.on('ConnectionEstablished', Data => {
      setMessages(Messages => [...Messages, Data])
    })

    SocketIO.on('NewMessageReceive', Data => {
      setMessages(Messages => [...Messages, Data])
    })

  }, [])

  const SendMessage = (e) => {
    e.preventDefault()
    SocketIO.emit('NewMessage', NewMessage)
    e.target.Input1.value = ''
  }

  return (
    <>
      <h1>CHAT</h1>
      <br />
      <div>
        {Messages.map(({ Id, Message }, index) => {
          return (
            <div key={index}>
              <span style={{ fontSize: '12px' }}>{Id === SocketIO.id ? 'Yo' : Id}: {Message}</span>
            </div>
          )
        })}
      </div>
      <br />
      <form onSubmit={e => SendMessage(e)}>
        <input type="text" id="Input1" onChange={e => setNewMessage({ Id: SocketIO.id, Message: e.target.value })} />
        <Button>Enviar Mensaje</Button>
      </form>
    </>
  )
}

export default Chat