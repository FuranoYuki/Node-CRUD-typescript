import { Schema, model, Document } from 'mongoose'
import bcrypt from 'bcrypt'

interface UserInterface extends Document {
    name?: string,
    age?: number,
    email?: string,
    password: string
}

const UserSchema = new Schema({
  name: String,
  age: Number,
  email: String,
  password: {
    type: String,
    require: true,
    select: false
  }
}, {
  timestamps: true
})

UserSchema.pre<UserInterface>('save', async function (next) {
  const hash = await bcrypt.hash(this.password, 14)
  this.password = hash
  next()
})

export default model<UserInterface>('User', UserSchema)
