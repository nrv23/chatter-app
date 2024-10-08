import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { UserRepository } from './user.repository';
import { DatabaseModule } from '../common/database/database.module';
import { User, UserSchema } from './entities/user.entity';

@Module({
  imports: [
    DatabaseModule.forFeature([
      {name: User.name, schema: UserSchema}
    ])
  ],
  providers: [UsersResolver, UsersService,UserRepository],
  exports: [ UsersService]
})
export class UsersModule {}
