import { Injectable } from '@nestjs/common'

@Injectable()
export class AddressService {
  getAddress () {
    return {
      code: 2323,
      msg: 'HuNan ChangSha'
    }
  }

  updateAddress () {
    return {
      code: 2323,
      msg: 'update address success'
    }
  }
}
