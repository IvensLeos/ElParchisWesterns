import { GraphQLModule } from '@graphql-modules/core'
import gql from "graphql-tag"

import UserSchema from '../models/user'

export const MyGraphQLModule = new GraphQLModule({
   typeDefs: gql`
      type User {
         _id: ID!
         Username: String!
         Email: String!
         Password: String!
         Image: String
         Level: String
         Bio: String
         Ranking: Int
         Name: String
         LastName: String
         DNI: String
         BornDate: String
         Gender: String
         Nacionality: String
         Phone: String
         Address: String
         CP: String
         Locality: String
         State: String
         Width: String
         Weight: String
         Complexion: String
         HairColor: String
         Profession: String
         Drinker: Boolean
         Smoker: Boolean
         Sports: Boolean
         UserSports: String
         Zodiac: String
         Interests: String
         Languages: String
      }

      type Query {
         GetUsers: [User]
         GetUser(Email: String!): User
      }

      type Mutation {
         AddUser(Username: String!, Email: String!, Password: String!): User

         UpdateUserProfileInfo(_id: ID!
            Name: String, LastName: String, DNI: String, BornDate: String, Gender: String, Nacionality: String, 
            Phone: String, Address: String, CP: String, Locality: String, State: String): User

         UpdateUserAdditionalInfo(_id: ID!
            Username: String, Password: String, Image: String, Width: String, 
            Weight: String, Complexion: String, HairColor: String, Profession: String, 
            Drinker: Boolean, Smoker: Boolean, Sports: Boolean, UserSports: String, 
            Zodiac: String, Interests: String, Languages: String): User
      }`,
   resolvers: {
      Query: {
         GetUsers: (parent, args) => {
            return UserSchema.find({})
         },
         GetUser: (parent, args) => {
            return UserSchema.findOne({ Email: args.Email })
         }
      },
      Mutation: {
         AddUser: async (parent, args, { req }) => {
            let User = new UserSchema({
               Username: args.Username,
               Email: args.Email,
               Password: args.Password
            })

            let UserSaved = await User.save()

            return UserSaved
         },
         UpdateUserProfileInfo: (parent, args) => {
            if (!args._id) return
            return UserSchema.findByIdAndUpdate(
               {
                  _id: args._id
               },
               {
                  $set: {
                     Name: args.Name, LastName: args.LastName, DNI: args.DNI, BornDate: args.BornDate, 
                     Gender: args.Gender, Nacionality: args.Nacionality, Phone: args.Phone, 
                     Address: args.Address, CP: args.CP, Locality: args.Locality, State: args.State
                  }
               }, { new: true }, (err, UserSchema) => {
                  if (err) console.log('Ocurrio Un Error Al Actualizar Los Datos De Usuario.')
                  else console.log('Usuario Actualizado Correctamente.')
               }
            )
         },
         UpdateUserAdditionalInfo: (parent, args) => {
            if (!args._id) return
            return UserSchema.findByIdAndUpdate(
               {
                  _id: args._id
               },
               {
                  $set: {
                     Username: args.Username, Password: args.Password, Image: args.Image, Width: args.Width, 
                     Weight: args.Weight, Complexion: args.Complexion, HairColor: args.HairColor, 
                     Profession: args.Profession, Drinker: args.Drinker, Smoker: args.Smoker, Sports: args.Sports, 
                     UserSports: args.UserSports, Zodiac: args.Zodiac, Interests: args.Interests, Languages: args.Languages
                  }
               }, { new: true }, (err, UserSchema) => {
                  if (err) console.log('Ocurrio Un Error Al Actualizar Los Datos De Usuario.')
                  else console.log('Usuario Actualizado Correctamente.')
               }
            )
         }
      }
   }
})