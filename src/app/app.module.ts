import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';

@NgModule({ // Decortor to define a class as a Module
  // Defines which components belong to this module:
  declarations: [AppComponent, ProductListComponent],
  // Defines the external modules that we want to have available to all of the components that belong to this angular module:
  imports: [BrowserModule], // Every browser module must import this
  // Defines the startup Component. This component should contain the selector we use in index.html
  // In this cas pm-root, which is defined in AppComponent
  bootstrap: [AppComponent]
})
export class AppModule { }
