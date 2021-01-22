import App from './app'
import env from 'dotenv'
env.config()

App.express.listen(process.env.PORT || 3333)
