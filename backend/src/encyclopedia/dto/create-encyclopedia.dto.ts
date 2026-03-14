import { IsString, IsNotEmpty } from 'class-validator';

export class CreateEncyclopediaDto {

  @IsString()
  @IsNotEmpty()
  nameEn: string;

  @IsString()
  @IsNotEmpty()
  nameSi: string;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsString()
  @IsNotEmpty()
  descriptionEn: string;

  @IsString()
  @IsNotEmpty()
  descriptionSi: string;

  @IsString()
  @IsNotEmpty()
  image: string;

}