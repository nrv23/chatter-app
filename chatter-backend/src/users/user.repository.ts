import { Injectable, Logger } from "@nestjs/common";
import { AbstractReposity } from "src/common/database/abstract.repository";
import { User } from "./entities/user.entity";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";


@Injectable()
export class UserRepository extends AbstractReposity<User> {
    protected readonly logger = new Logger(UserRepository.name);


    constructor(@InjectModel(User.name) userModel: Model<User>) {
        super(userModel)
    }
}