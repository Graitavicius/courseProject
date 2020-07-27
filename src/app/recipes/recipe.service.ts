import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../shopping-list/store/shopping-list.actions';
import * as fromAppReducer from '../store/app.reducer';
@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Delicious Hot Dog',
  //     'You have to try it!',
  //     'https://live.staticflickr.com/4899/32770365848_8f84af509c_b.jpg',
  //     [
  //       new Ingredient('Buns', 1),
  //       new Ingredient('Sausage', 1),
  //       new Ingredient('Mustard', 1),
  //     ]
  //   ),
  //   new Recipe(
  //     'Tasty Burger',
  //     'The best burger on the planet!',
  //     'https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_960_720.jpg',
  //     [
  //       new Ingredient('Buns', 2),
  //       new Ingredient('Beef', 1),
  //       new Ingredient('Cheese', 1),
  //       new Ingredient('Tomato', 2),
  //       new Ingredient('Pickles', 3),
  //       new Ingredient('Onion', 1),
  //       new Ingredient('Mayonnaise', 1),
  //       new Ingredient('Lettuce', 1),
  //     ]
  //   ),
  // ];

  private recipes: Recipe[] = [];

  constructor(private store: Store<fromAppReducer.AppState>) {}
  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    //this.shoppingListService.addIngredients(ingredients);
    this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
