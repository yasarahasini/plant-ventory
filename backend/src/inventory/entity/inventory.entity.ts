import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Inventory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  quantity: number;

  @Column()
  price: number;

  @Column()
  image: string;

  @Column()
  category: string;
}