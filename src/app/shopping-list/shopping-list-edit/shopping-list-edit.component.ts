import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';


@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent {
  @ViewChild('nameInput',{ static: false })nameInputRef!: ElementRef;
  @ViewChild('amountInput',{ static: false }) amountInputRef!: ElementRef;
 

  @Output() inputIngredient = new EventEmitter<Ingredient>();

  onAddIngredient() {
    const amountIn = this.nameInputRef.nativeElement.value;
    const nameIn = this.nameInputRef.nativeElement.value;
    const newIng = new Ingredient(nameIn, amountIn);
    this.inputIngredient.emit(newIng);
  }
}
 