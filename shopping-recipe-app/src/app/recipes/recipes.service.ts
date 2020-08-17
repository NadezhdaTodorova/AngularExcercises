import { Recipe }  from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
    
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe('A Test recipe', 'This is simply a test', 
        'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg'),
        new Recipe('Another test recipe', 'This is simply a test', 
        'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg'),
      ];
    getRecipe() {
        return this.recipes.slice();
    }


}