import * as path from 'path'
import * as Log4js from 'log4js'

const baseLogPath = path.resolve(__dirname, '../../logs') // 日志要写入哪个目录

const log4jsConfig = {
  appenders: {
    console: {
      type: 'console' // 会打印到控制台
    },
    access: {
      type: 'dateFile', // 会写入文件，并按照日期分类
      filename: `${baseLogPath}/access/access.log`, // 日志文件名，会命名为：access.20200320.log
      alwaysIncludePattern: true, // 文件名的格式
      pattern: 'yyyyMMdd', // 文件名的格式
      daysToKeep: 60,
      numBackups: 3,
      keepFileExt: true // 是否保留文件后缀
    },
    errors: {
      type: 'dateFile',
      filename: `${baseLogPath}/errors/error.log`,
      alwaysIncludePattern: true,
      pattern: 'yyyyMMdd',
      daysToKeep: 60,
      numBackups: 3,
      keepFileExt: true
    }
  },
  categories: {
    default: { appenders: ['console', 'access', 'errors'], level: 'ALL' }
  }
  // pm2: true, // 使用 pm2 来管理项目时，打开
  // pm2InstanceVar: 'INSTANCE_ID' // 会根据 pm2 分配的 id 进行区分，以免各进程在写日志时造成冲突
}
Log4js.configure(log4jsConfig)
const logger = Log4js.getLogger()

export default logger
