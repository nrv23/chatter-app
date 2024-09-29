import { User } from "../models/User";


export interface IAuthResponseType {
    login: {
        user: User;
        token?: string;
    }
}