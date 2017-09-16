import { Recipe } from '../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Just testing new recipe', 'http://images.media-allrecipes.com/userphotos/250x250/927031.jpg')
  ]

  constructor() { }

  ngOnInit() {
  }

}