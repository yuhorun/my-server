import { Controller, Get, Post } from '@nestjs/common'
import { AddressService } from './address.service'

@Controller('address')
export class AddressController {
  constructor (
    private readonly addressService: AddressService
  ) {}

  @Get('getAddress')
  getAddress () {
    return this.addressService.getAddress()
  }

  @Post('updateAddress')
  updateAddress () {
    return this.addressService.updateAddress()
  }
}
