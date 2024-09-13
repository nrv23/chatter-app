import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsOptional, IsString, Matches, MaxLength, MinLength } from 'class-validator';

@InputType()
export class CreateUserInput {

  @IsString()
  @MaxLength(150)
  @IsEmail()
  @Field(() => String)
  email: string;

  @IsString()
  @IsOptional()
  @MaxLength(15)
  @MinLength(6)
  @Matches(/^[a-zA-Z0-9_]+$/, {
    message: "La contraseña no cumple con el formato"
  })
  @Field(() => String, { nullable: true })
  password: string;
}
