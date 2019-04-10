import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  //recipeSelected: EventEmitter<Recipe> = new EventEmitter();

  private recipes: Recipe[] = [
    new Recipe('first dish',
               'looks good', 
               'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/styles/full/public/IMG_1105.jpg?itok=l4727xCs&mtime=1375852398',
               [
                 new Ingredient('Eggplant', 1),
                 new Ingredient('Tomato', 1)
               ]),
    new Recipe('Second dish', 
               'very spicy', 
               'https://www.nps.gov/subjects/camping/images/recipe_1.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
               [
                 new Ingredient('Tofu', 1),
                 new Ingredient('Hot Pepper', 4)
               ])
  ];
  
  getRecipes() {
    // return a copy of recipes array
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  constructor() { }
}
