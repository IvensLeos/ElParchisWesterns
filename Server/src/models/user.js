import mongoose from 'mongoose'
import UniqueValidator from 'mongoose-unique-validator'
import { compareSync, hashSync } from 'bcryptjs'
import jwt from 'jsonwebtoken'

import { SESSION_SECRET } from '../config'

const UserSchema = new mongoose.Schema({
   Username: {
      type: String,
      required: [true, 'Usuario: Este Campo No Puede Estar Vacio.\n'],
      unique: true,
      uniqueCaseInsensitive: true,
      match: [/^([a-zA-Z0-9]{4,16})+$/, 'Usuario: Debe Contener Una Longitud De 4 A 16 Caracteres Alfanumericos.\n']
   },
   Email: {
      type: String,
      index: true,
      required: [true, 'Email: Este Campo No Puede Estar Vacio.\n'],
      unique: true,
      lowercase: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/, 'Email: Debe Ser De Formato: example@example.com | example@example.com.mx.\n']
   },
   Password: {
      type: String,
      required: [true, 'Password: Este Campo No Puede Estar Vacio.\n'],
      match: [/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/, 'Password: Debe Contener Una Longitud De 8 A 20 Caracteres, Almenos Una Letra Mayuscula, Una Letra Minuscula, Un Numero Y Un Caracter Especial.\n']
   },
   Image: { type: String },
   Bio: { type: String, default: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...' },
   Level: { type: String, default: 'NOOB' },
   Ranking: { type: Number, default: 0 },
   Name: { type: String },
   LastName: { type: String },
   DNI: { type: String },
   BornDate: { type: Date },
   Gender: { type: String },
   Nacionality: { type: String },
   Phone: { type: String },
   Address: { type: String },
   CP: { type: String },
   Locality: { type: String },
   State: { type: String },
   Width: { type: String },
   Weight: { type: String },
   Complexion: { type: String },
   HairColor: { type: String },
   Profession: { type: String },
   Drinker: { type: Boolean, default: false },
   Smoker: { type: Boolean, default: false },
   Sports: { type: Boolean, default: false },
   UserSports: { type: String },
   Zodiac: { type: String },
   Interests: { type: String },
   Languages: { type: String }
}, { timestamps: true })

UserSchema.plugin(UniqueValidator, { message: 'Disponibilidad: {VALUE} Ya Se Encuentra Registrado.' })

UserSchema.pre('save', function () {
   if (this.isModified('Password')) {
      this.Password = hashSync(this.Password, 10)
   }
})

UserSchema.methods.comparePasswords = function (Password) {
   return compareSync(Password, this.Password)
}

UserSchema.methods.generateJWT = function () {
   const today = new Date()
   const expires = new Date(today)
   expires.setDate(today.getDate() + 3)

   return jwt.sign({
      id: this._id,
      Username: this.Username,
      Expires: parseInt(expires.getTime() / 1000)
   }, process.env.SESSION_SECRET || SESSION_SECRET)
}

UserSchema.methods.toAuthJSON = function () {
   return {
      Username: this.Username,
      Email: this.Email,
      Image: this.Image,
      Token: this.generateJWT()
   }
}

const User = mongoose.model('Users', UserSchema)

export default User