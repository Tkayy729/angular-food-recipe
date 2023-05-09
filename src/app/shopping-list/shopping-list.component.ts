import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients =[
    new Ingredient("mako", 89),
    new Ingredient("tomato",78),
    new Ingredient("shio",797),
    new Ingredient("pepper",178)
  ]

}
