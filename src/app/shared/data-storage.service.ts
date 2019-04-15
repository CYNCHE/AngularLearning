import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Http } from '@angular/http';
import { Recipe } from '../recipes/recipe.model';
import { Response } from '@angular/http';
import { pipe } from '@angular/core/src/render3';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: Http,
    private recipeService: RecipeService) { }


  storeRecipes() {
    return this.http.put('https://angulartest-3f10a.firebaseio.com/recipes.json', this.recipeService
      .getRecipes());
  }

  getRecipes() {
    this.http.get('https://angulartest-3f10a.firebaseio.com/recipes.json')
      // deal with the case where one recipe does not have any ingredients
      .pipe(map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          for (let recipe of recipes) {
            if (recipe['ingredients'])
              recipe['ingredients'] = [];
          }
          return recipes;
        }
      ))
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
