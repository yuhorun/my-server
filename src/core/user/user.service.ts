import { Injectable } from '@nestjs/common'

@Injectable()
export class UserService {
  constructor () {}
  login () {
    return {
      code: 2323,
      msg: 'success'
    }
  }
}
