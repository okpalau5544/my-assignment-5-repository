import Koa from 'koa' // Capital 'K', as per Koa docs
import { setupWarehouseRoutes } from './warehouse'
import bodyParser from 'koa-bodyparser'
import swaggerUi from 'swagger-ui-koa'
import * as swaggerDocument from '../build/swagger.json'
import Router from 'koa-router'

const app = new Koa()
const router = new Router()

app.use(swaggerUi.serve as Koa.Middleware)
app.use(swaggerUi.setup(swaggerDocument) as Koa.Middleware)
app.use(bodyParser())
app.use(router.routes()).use(router.allowedMethods())
app.use(setupWarehouseRoutes)

export default app
