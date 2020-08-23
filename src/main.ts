import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { LoggerInterceptor } from './interceptor/logger.interceptor'

async function bootstrap () {
  const app = await NestFactory.create(AppModule, {
    bodyParser: true
  })
  app.useGlobalInterceptors(new LoggerInterceptor())
  await app.listen(3000)
  console.log('listen: http://127.0.0.1:3000')
}
bootstrap()
