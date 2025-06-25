import Koa from 'koa' // Capital 'K', as per Koa docs
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'
import { registerRoutes } from './routes/registerRoutes'
import swaggerUi from 'swagger-ui-koa'
import * as swaggerDocument from './swagger.json'

const app = new Koa()
const router = new Router()

app.use(swaggerUi.serve as Koa.Middleware)
app.use(swaggerUi.setup(swaggerDocument) as Koa.Middleware)
app.use(bodyParser())
registerRoutes(router)
app.use(router.routes()).use(router.allowedMethods())

export default app
