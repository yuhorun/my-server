
import * as path from 'path'
import timeFormat from '../src/util/timeFormat'

const productConfig = {
  port: 34201,
  mysql: {
    port: 3306,
    host: '172.21.195.18',
    user: 'zoutianyu',
    password: 'Zouty#123',
    database: 'store',
    connectionLimit: 10
  },
  logPath: path.resolve(__dirname, `../logs/${timeFormat()}.log`),
  secret: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
}

const localConfig = {
  port: 34200, // 端口
  mysql: {
    port: 3306,
    host: '172.21.195.18',
    user: 'zoutianyu',
    password: 'Zouty#123',
    database: 'store_test', // 库名
    connectionLimit: 10 // 连接限制
  },
  logPath: path.resolve(__dirname, `../logs/${timeFormat()}.log`),
  secret: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
}

const Global = process.env.NODE_ENV === 'production' ? productConfig : localConfig

export default Global
