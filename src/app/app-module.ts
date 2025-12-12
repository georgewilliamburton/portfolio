import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { About } from './about/about';
import { Skills } from './skills/skills';
import { Shiny } from './shiny/shiny';
import { Recipes } from './recipes/recipes';
import { Accolades } from './accolades/accolades';

@NgModule({
  declarations: [
    App,
    About,
    Skills,
    Shiny,
    Recipes,
    Accolades
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
