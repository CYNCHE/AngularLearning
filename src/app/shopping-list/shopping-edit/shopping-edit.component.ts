import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  // @Output() ingredientAdded: EventEmitter<Ingredient> = new EventEmitter();

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem() {
    
    const igrName = this.nameInputRef.nativeElement.value;
    const igrAmount =  this.amountInputRef.nativeElement.value
    const newIngredient = new Ingredient(igrName, igrAmount);
    console.log(newIngredient);
    this.slService.addIngredients(newIngredient);
  
  }


}
