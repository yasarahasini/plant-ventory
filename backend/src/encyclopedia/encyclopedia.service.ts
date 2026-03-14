import { Injectable } from '@nestjs/common';
import { CreateEncyclopediaDto } from './dto/create-encyclopedia.dto';
import { Encyclopedia } from './entity/encyclopedia.entity';

@Injectable()
export class EncyclopediaService {

  private plants: Encyclopedia[] = [];
  private id = 1;

  findAll(): Encyclopedia[] {
    return this.plants;
  }

  create(createDto: CreateEncyclopediaDto) {

    const newPlant: Encyclopedia = {
      id: this.id++,
      ...createDto,
    };

    this.plants.push(newPlant);

    return newPlant;
  }

  remove(id: number) {

    this.plants = this.plants.filter(p => p.id !== id);

    return { message: "Plant deleted successfully" };

  }

}