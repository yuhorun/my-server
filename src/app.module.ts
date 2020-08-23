import { Module } from '@nestjs/common'
import { UserModule } from './core/user/user.module'
import { AddressModule } from './core/address/address.module'

@Module({
  imports: [UserModule, AddressModule],
  exports: [],
  controllers: [],
  providers: []
})
export class AppModule {}
