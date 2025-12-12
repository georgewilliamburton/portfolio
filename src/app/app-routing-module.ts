import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { About } from './about/about';
import { Skills } from './skills/skills';
import { Recipes } from './recipes/recipes';
import { Accolades } from './accolades/accolades';
import { Shiny } from './shiny/shiny';

const routes: Routes = [

  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'about', component: About },
  { path: 'skills', component: Skills },
  { path: 'shiny', component: Shiny },
  { path: 'recipes', component: Recipes },
  { path: 'accolades', component: Accolades },
  { path: '**', redirectTo: '/' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
