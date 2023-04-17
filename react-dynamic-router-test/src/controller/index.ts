import { Readable } from 'stream'
import { Controller, Get, Provide, Inject } from '@midwayjs/decorator'
import { Context } from '@midwayjs/koa'
import { render } from 'ssr-core'
import { IApiService, IApiDetailService } from '../interface'

interface IKoaContext extends Context {
  apiService: IApiService
  apiDeatilservice: IApiDetailService
}

@Provide()
@Controller('/')
export class Index {
  @Inject()
  ctx: IKoaContext

  @Inject('ApiService')
  apiService: IApiService

  @Inject('ApiDetailService')
  apiDeatilservice: IApiDetailService

  @Get('/')
  @Get('/detail/:id')
  @Get('/login')
  @Get('/user')
  async handler (): Promise<void> {
    try {
      this.ctx.apiService = this.apiService
      this.ctx.apiDeatilservice = this.apiDeatilservice
      const stream = await render<Readable>(this.ctx, {
        stream: true
      })
      this.ctx.body = stream
    } catch (error) {
      console.log(error)
      this.ctx.body = error
    }
  }
  @Get('/zh')
  async handlerZh (): Promise<void> {
    try {
      this.ctx.apiService = this.apiService
      this.ctx.apiDeatilservice = this.apiDeatilservice
      const stream = await render<Readable>(this.ctx, {
        stream: true,
        prefix: '/zh'
      })
      this.ctx.body = stream
    } catch (error) {
      console.log(error)
      this.ctx.body = error
    }
  }

  @Get('/en')
  async handlerEn (): Promise<void> {
    try {
      this.ctx.apiService = this.apiService
      this.ctx.apiDeatilservice = this.apiDeatilservice
      const stream = await render<Readable>(this.ctx, {
        stream: true,
        prefix: '/en'
      })
      this.ctx.body = stream
    } catch (error) {
      console.log(error)
      this.ctx.body = error
    }
  }
}
