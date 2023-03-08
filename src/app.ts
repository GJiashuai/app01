import Koa from 'koa'
import BodyParser from 'koa-bodyparser'
import Static from 'koa-static'
import Cors from 'koa2-cors'
import Path from 'path'
import AddressIP from 'ip'
import AppRouter from './routes/app'
import { errorHandler, responseHandler } from './middlewares/response'
import { corsHandler } from './middlewares/cors'
const source = Static(`${Path.join(__dirname)}/public`)
const PORT = 3000
const app = new Koa()

// Error Handler
app.use(errorHandler)

// ctx.body
app.use(BodyParser())

app.use(Cors(corsHandler))

// 静态资源
app.use(source)

// 路由
app.use(AppRouter.routes()).use(AppRouter.allowedMethods())

// Error Handler
app.use(responseHandler)

app.listen(PORT, () => {
  console.log(`http://${AddressIP.address()}:${PORT} 已启动`)
})

module.exports = app
