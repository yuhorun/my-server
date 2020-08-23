import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { Request, Response } from 'express'
import logger from 'src/logger/log4js'
import * as StackTrace from 'stacktrace-js'

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  intercept (context: ExecutionContext, next: CallHandler): Observable<any> {
    const ctx = context.switchToHttp()
    const req:Request = ctx.getRequest()
    const res:Response = ctx.getResponse()
    return next.handle().pipe(
      map(data => {
        if (res.statusCode === 200) {
          const stackList: StackTrace.StackFrame[] = StackTrace.getSync()
          const stackInfo: StackTrace.StackFrame = stackList[2]

          const lineNumber: number = stackInfo.lineNumber
          const columnNumber: number = stackInfo.columnNumber
          const fileName: string = stackInfo.fileName
          console.log(`${fileName}(line: ${lineNumber}, column: ${columnNumber}): \n`)
          console.log(stackList)

          logger.debug('time: ', new Date().toISOString())
        }
        return {
          status: res.statusCode,
          ...data,
          timestamp: new Date().toISOString(),
          path: req.url
        }
      })
    )
  }
}
