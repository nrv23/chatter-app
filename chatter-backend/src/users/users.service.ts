import {  Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UserRepository } from './user.repository';
import * as bcrypt from 'bcryptjs';
@Injectable()
export class UsersService {


  constructor(
    private readonly userRepo: UserRepository
  ) {


  }

  async create(createUserInput: CreateUserInput) {
    return this.userRepo.create({
      ...createUserInput,
      password: await this.hashPass(createUserInput.password, 10)
    });
  }

  async findAll() {
    return this.userRepo.find({})
  }

  async findOne(id: string) {
    return this.userRepo.findOne({ _id: id });
  }

  async update(_id: string, updateUserInput: UpdateUserInput) {

    if(updateUserInput.password) updateUserInput.password = await this.hashPass(updateUserInput.password, 10);

    return this.userRepo.findOneAndUpdate({ _id }, {
      $set: {
        ...updateUserInput
      }
    })
  }

  remove(_id: string) {
    return this.userRepo.findOneAndDelete({_id})
  }

  async verifiyUser(email: string, password: string) {

    const user = await this.userRepo.findOne({email});
    const isMatched = this.comparePass(password, user.password);

    if(!isMatched) throw new UnauthorizedException("Invalid Credentials");


    return user;
  }

  private async hashPass(pass: string, salt: number): Promise<string> {
    return await bcrypt.hash(pass, salt);
  }

  private async comparePass(pass: string, hash: string) {
    return bcrypt.compare(pass, hash);
  }
}
