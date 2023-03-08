import Router from 'koa-router'
import AppController from '../controllers/App'

const routerInit = new Router({ prefix: '/v1/' })

routerInit.get('get', AppController.get)

routerInit.post('save', AppController.save)
export default routerInit
