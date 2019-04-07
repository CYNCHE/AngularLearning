import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;
  isShown: boolean = false;

  constructor(private slService: ShoppingListService) {}


  ngOnInit() {
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
