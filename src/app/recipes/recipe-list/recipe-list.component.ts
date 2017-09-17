import { Recipe } from '../recipe.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>()

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Just testing new recipe', 'http://images.media-allrecipes.com/userphotos/250x250/927031.jpg'),
    new Recipe('Test Recipe Two', 'Just testing another recipe', 'http://images.media-allrecipes.com/userphotos/250x250/927031.jpg')
  ]

  constructor() { }
  ngOnInit() {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  }

}