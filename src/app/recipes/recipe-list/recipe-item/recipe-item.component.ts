import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Output() recipeSelected: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(1);
  }

  onSelected() {
    console.log(10);
    this.recipeSelected.emit();
  }

  test() {
    console.log(10);
  }

  

}
