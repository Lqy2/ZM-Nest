import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [
    {
      id: 1,
      name: 'Whiskers',
      age: 3,
      breed: 'Siamese',
    },
    {
      id: 2,
      name: 'Fluffy',
      age: 5,
      breed: 'Persian',
    },
  ];
  findAll(): Cat[] {
    return this.cats;
  }
  create(cat: Cat) {
    this.cats.push(cat);
  }
  findOne(id: number): Cat {
    return this.cats[id];
  }
}
