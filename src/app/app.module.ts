import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';

@NgModule({ // Decortor to define a class as a Module
  // Defines which components belong to this module:
  declarations: [AppComponent, ProductListComponent, ConvertToSpacesPipe],
  // Defines the external modules that we want to have available to all of the components that belong to this angular module:
  imports: [BrowserModule, FormsModule], // Every browser module must import this
  // Defines the startup Component. This component should contain the selector we use in index.html
  // In this cas pm-root, which is defined in AppComponent
  bootstrap: [AppComponent]
})
export class AppModule { }
