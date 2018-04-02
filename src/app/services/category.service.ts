import { Injectable } from '@angular/core';
import { Category } from '../category';
import { CATEGORIES } from '../mock-categories';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class CategoryService {

  constructor() { }

  getCategories(): Observable<Category[]> {
    return of(CATEGORIES);
  }

  getCategoryById(id: string): Category {
    return CATEGORIES.find(x => x.id === id);
  }

}