import { Router } from 'express'

// Controllers
import UserController from './Controller/User'
// Middleware
import Auth from './MIddleware/Auth'

const routes = Router()

routes.post('/find', Auth, UserController.findUser)
routes.post('/create', UserController.createUser)
routes.put('/update', Auth, UserController.updateUser)
routes.delete('/delete', Auth, UserController.deleteUser)

export default routes
