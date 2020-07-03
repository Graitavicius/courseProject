import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Delicious Hot Dog',
      'You have to try it!',
      'https://live.staticflickr.com/4899/32770365848_8f84af509c_b.jpg',
      [
        new Ingredient('Buns', 1),
        new Ingredient('Sausage', 1),
        new Ingredient('Mustard', 1),
      ]
    ),
    new Recipe(
      'Tasty Burger',
      'The best burger on the planet!',
      'https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_960_720.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Beef', 1),
        new Ingredient('Cheese', 1),
        new Ingredient('Tomato', 2),
        new Ingredient('Pickles', 3),
        new Ingredient('Onion', 1),
        new Ingredient('Mayonnaise', 1),
        new Ingredient('Lettuce', 1),
      ]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
