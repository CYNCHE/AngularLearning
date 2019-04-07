import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientsChanged: EventEmitter<Ingredient[]> = new EventEmitter();

  private ingredients: Ingredient[] = [
    new Ingredient('Tomato', 10),
    new Ingredient('Potato', 8)
  ];

  constructor() {}

  getingredients() {
    return this.ingredients.slice();
  }

  addIngredients(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
