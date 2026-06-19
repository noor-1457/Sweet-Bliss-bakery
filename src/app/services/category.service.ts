import { Injectable } from '@angular/core';
import { Categories } from 'src/app/dummy-data/categories';
import { Category } from 'src/app/interfaces/category.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  getCategories(): Category[] {
    return Categories;
  } 
}