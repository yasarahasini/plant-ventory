import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { EncyclopediaService } from './encyclopedia.service';
import { CreateEncyclopediaDto } from './dto/create-encyclopedia.dto';

@Controller('encyclopedia')
export class EncyclopediaController {

  constructor(private readonly encyclopediaService: EncyclopediaService) {}

  @Get()
  findAll() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.encyclopediaService.findAll();
  }

  @Post()
  create(@Body() createDto: CreateEncyclopediaDto) {
    return this.encyclopediaService.create(createDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.encyclopediaService.remove(Number(id));
  }

}