import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Inventory } from './entity/inventory.entity';

@Injectable()
export class InventoryService {
  constructor(
    @InjectRepository(Inventory)
    private inventoryRepo: Repository<Inventory>,
  ) {}

  findAll() {
    return this.inventoryRepo.find();
  }

  create(data: Partial<Inventory>) {
    const inventory = this.inventoryRepo.create(data);
    return this.inventoryRepo.save(inventory);
  }

  remove(id: number) {
    return this.inventoryRepo.delete(id);
  }
}