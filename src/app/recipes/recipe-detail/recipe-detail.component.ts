import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})


export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;
  id: number;
  isShown: boolean = false;

  constructor(private slService: ShoppingListService,
              private recipeService: RecipeService,
              private route: ActivatedRoute) {}


  ngOnInit() {
    console.log(1);
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.id);
          console.log(this.recipe);
        }
      ) 
  }

  onToggle() {
    this.isShown = !this.isShown;
  }

  onSend() {
    let ingredients:Ingredient[] = this.recipe.ingredients;
    for(let i = 0; i < ingredients.length; ++i) {
      this.slService.addIngredients(ingredients[i]);
    }
  }

}
