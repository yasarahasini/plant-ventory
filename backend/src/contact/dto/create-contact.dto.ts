import { IsNotEmpty, IsEmail, Length } from 'class-validator';

export class CreateContactDto {
  @IsNotEmpty()
  @Length(2, 50)
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(5, 500)
  message: string;
}
