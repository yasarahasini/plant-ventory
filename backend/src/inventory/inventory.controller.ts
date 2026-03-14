import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { InventoryService } from './inventory.service';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Get()
  getInventory() {
    return this.inventoryService.findAll();
  }

  @Post()
  createInventory(@Body() body: any): any {
    return this.inventoryService.create(body);
  }

  @Delete(':id')
  deleteInventory(@Param('id') id: number) {
    return this.inventoryService.remove(id);
  }
}