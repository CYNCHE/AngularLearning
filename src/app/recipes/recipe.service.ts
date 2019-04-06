import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe-list/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected: EventEmitter<Recipe> = new EventEmitter();
  
  private recipes: Recipe[] = [
    new Recipe('first dish', 'looks good', 'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/styles/full/public/IMG_1105.jpg?itok=l4727xCs&mtime=1375852398'),
    new Recipe('first dish', 'looks good', 'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/styles/full/public/IMG_1105.jpg?itok=l4727xCs&mtime=1375852398')
  ];
  
  getRecipes() {
    // return a copy of recipes array
    return this.recipes.slice();
  }

  constructor() { }
}
