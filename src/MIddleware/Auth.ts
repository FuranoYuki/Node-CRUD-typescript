import { Request, Response, NextFunction } from 'express'
import jwt, { TokenExpiredError } from 'jsonwebtoken'
import config from '../config'

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization

  if (!authHeader) { return res.status(400).send("header authorization doesn't exist") }

  const parts = authHeader.split(' ')

  if (parts.length < 2) { return res.status(400).send('header authorization incomplete') }

  const [schema, token] = parts

  if (!/^Bearer$/i.test(schema)) { return res.status(400).send('the Bearer in the header authorization is missing') }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      const tokenExpired = (<TokenExpiredError>err).expiredAt
      return res.status(400).send({
        message: 'failed at verify header authorization',
        tokenExpired
      })
    }

    req.body.id = (<any>decoded).id
    next()
  })
}

export default verifyToken
