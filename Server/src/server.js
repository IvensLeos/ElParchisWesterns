// ESM syntax is supported.
import express from 'express'
import cors from 'cors'
import path from 'path'
import mongoose from 'mongoose'
import session from 'express-session'
import connectStore from 'connect-mongo'
//import io from 'socket.io'

import { ApolloServer } from 'apollo-server';
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
         "origin": ["http://localhost:3000, http://*.stripe.com, http://stripe.com"],
         "methods": ["GET, POST, DELETE"],
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

      // Starting Server
      app.listen(app.get('port'), () => console.log(`Servidor http://localhost:${app.get('port')}/`))

      //Starting GrapqlServer
      const GraphQLServer = new ApolloServer({
         schema: MyGraphQLModule.schema,
         context: session => session,
         engine: {
            reportSchema: true
         }
      })

      GraphQLServer.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
         console.log(`GraphQL ${url}`)
      })

      //Starting Socket.IO
      // const SocketIO = io.listen(3002).origins(['http://localhost'])
      // SocketIO.on('connection', socket => {
      //    console.log(socket.id)
      // })

   } catch (error) { console.log(error) }
})()