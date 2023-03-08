import { Context } from 'koa'
import fs from 'fs-extra'
import path from 'path'

const Path = path.join(__dirname, '../data', 'data.json')

export default class AppController {
  public static async save(ctx: Context) {
    const request: any = ctx.request.body
    await fs.writeFileSync(Path, JSON.stringify(request))
    ctx.status = 200
    ctx.body = {
      code: 0,
      data: 'success',
    }
  }

  public static async get(ctx: Context) {
    const data = await fs.readJsonSync(
      path.join(__dirname, '../data', 'data.json')
    )
    ctx.status = 200
    ctx.body = {
      code: 0,
      data,
    }
  }
}
