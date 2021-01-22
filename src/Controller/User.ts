import { Request, Response } from 'express'
import User from '../Schema/User'
import jwt from 'jsonwebtoken'
import config from '../config'

class UserController {
  public async findUser (req: Request, res: Response): Promise<Response> {
    try {
      const findUser = await User.findById(req.body.id)

      if (!findUser) {
        return res.status(400).json({ message: 'failed at findUser' })
      }

      return res.json(findUser)
    } catch (error) {
      return res.status(400).send('failed at findUser')
    }
  }

  public async createUser (req: Request, res: Response): Promise<Response> {
    try {
      const createUser = await User.create(req.body)

      const token = jwt.sign({ id: createUser._id }, config.secret, {
        expiresIn: '5d'
      })

      return res.json({ createUser, token })
    } catch (error) {
      console.log(error)

      return res.status(400).send('failed at createUser')
    }
  }

  public async updateUser (req: Request, res: Response): Promise<Response> {
    try {
      const updateUser = await User.findByIdAndUpdate(req.body.id, req.body, { new: true })

      return res.json(updateUser)
    } catch (error) {
      console.log(error)

      return res.status(400).send('failed at updateUser')
    }
  }

  public async deleteUser (req: Request, res: Response): Promise<Response> {
    try {
      await User.findByIdAndDelete(req.body.id)

      return res.send('user deleted')
    } catch (error) {
      return res.status(400).send('failed at deleteUser')
    }
  }
}

export default new UserController()
