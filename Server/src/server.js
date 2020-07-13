// ESM syntax is supported.
import express from 'express'
import cors from 'cors'
import path from 'path'
import mongoose from 'mongoose'
import session from 'express-session'
import connectStore from 'connect-mongo'

import { ApolloServer } from 'apollo-server-express'
import { MyGraphQLModule } from './graphql/schema'
//import morgan from 'morgan'

// Database Settings & Connections
import { NODE_ENV, MONGODB_URI, SESSION_NAME, SESSION_SECRET, SESSION_LIFETIME } from './config'

(async () => {
   try {

      await mongoose.connect(MONGODB_URI, { keepAlive: 1, useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
      console.log('Conectado A MongoDB')

      const app = express()
      const MongoStore = connectStore(session)

      // Settings
      app.disable('x-powered-by')
      app.set("port", process.env.PORT || 3001)

      // Midlewares
      app.use(cors({
         "origin": "*",
         "methods": "GET, POST",
         "preflightContinue": false,
         "optionsSuccessStatus": 204
      }))
      //app.use(morgan('dev'))
      app.use(express.json())
      app.use(session({
         name: process.env.SESSION_NAME || SESSION_NAME,
         secret: process.env.SESSION_SECRET || SESSION_SECRET,
         saveUninitialized: false,
         resave: false,
         store: new MongoStore({
            mongooseConnection: mongoose.connection,
            collection: 'session',
            ttl: parseInt(process.env.SESSION_LIFETIME || SESSION_LIFETIME) / 1000
         }),
         cookie: {
            sameSite: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: parseInt(process.env.SESSION_LIFETIME || SESSION_LIFETIME)
         }
      }))

      // Static Files
      app.use(express.static(path.join(__dirname, '../../Client/build')))
      
      // Render Only React Production Build
      app.get('*', (req, res) => {
         res.sendFile(path.join(__dirname, '../../Client/build/index.html'))
      })

      // Starting GrapQLServer
      const GraphQLServer = new ApolloServer({
         schema: MyGraphQLModule.schema,
         engine: { reportSchema: true }
      })

      // Apply GraphQLServer Middleware
      GraphQLServer.applyMiddleware({
         path: '',
         app
      })

      // Starting Socket.IO
      const Server = require('http').createServer(app)
      const IO = require('socket.io')(Server)

      IO.on('connection', (Socket) => {

         Socket.emit('ConnectionEstablished', {
            Id: 'El Parchis Westerns',
            Message: `Bienvenido ${Socket.id}.`
         })

         Socket.on('NewMessage', Data => {
            Socket.emit('NewMessageReceive', Data)
            Socket.broadcast.emit('NewMessageReceive', Data)
         })
      })
      
      // Starting Server
      Server.listen(app.get('port'), () => {
         console.log(`Seridor: http://localhost:${app.get('port')}/`)
         console.log(`GraphQL: http://localhost:${app.get('port')}/graphql`)
         console.log(`WebSocket: ws://localhost:${app.get('port')}/`)
      })

   } catch (error) { console.log(error) }
})()