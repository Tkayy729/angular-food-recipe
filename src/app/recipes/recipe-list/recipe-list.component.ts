import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] =[
    new Recipe("Cake", "Delicious cake made by myself" ,`https://preppykitchen.com/wp-content/uploads/2022/05/Strawberry-Cake-Recipe-Card.jpg`),
    new Recipe("Jollof", "Ghana Jollof with pear", "https://eatwellabi.com/wp-content/uploads/2022/11/Jollof-rice-16.jpg")
  ]

  
    

}
