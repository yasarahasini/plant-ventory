import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { User } from './auth/user.entity';
import { ContactModule } from './contact/contact.module';
import { InventoryModule } from './inventory/inventory.module';
import { Contact } from './contact/entity/contact.entity';
import { Inventory } from './inventory/entity/inventory.entity';
import { EncyclopediaModule } from './encyclopedia/encyclopedia.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345', 
      database: 'plantventory',
      entities: [User, Contact, Inventory],
      synchronize: true, 
    }),
    AuthModule,
    ContactModule,
    InventoryModule,
    EncyclopediaModule,
  ],
})
export class AppModule {}