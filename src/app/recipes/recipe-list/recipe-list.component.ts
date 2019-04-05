import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() reveipeWasSelected: EventEmitter<Recipe> = new EventEmitter();
  recipes: Recipe[] = [
    new Recipe('first dish', 'looks good', 'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/styles/full/public/IMG_1105.jpg?itok=l4727xCs&mtime=1375852398')
  ];

  constructor() { }

  ngOnInit() {

  }

  onRecipeSelected(recipe: Recipe) {
    this.reveipeWasSelected.emit(recipe);
    console.log(recipe);
  }

}
