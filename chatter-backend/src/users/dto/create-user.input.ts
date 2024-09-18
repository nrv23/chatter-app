import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsString, Matches, MaxLength, MinLength } from 'class-validator';

@InputType()
export class CreateUserInput {

  @IsEmail()
  @MaxLength(150)
  @Field(() => String)
  email: string;

  @IsString()
  @MaxLength(15)
  @MinLength(6)
  @Matches(/^[a-zA-Z0-9_]+$/, {
    message: "La contraseña no cumple con el formato"
  })
  @Field(() => String)
  password: string;
}
