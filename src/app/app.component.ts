import {Component} from '@angular/core';

// Metadata decorator:
@Component({
  selector: 'pm-root', // The convention for naming these is to add a prefix for your app. In this case, 'pm' for 'Product Management'
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Class:
// By convention, the root component is called AppComponent
export class AppComponent {
  pageTitle: string = 'Acme Product Management'; // type not required explicitly for 'title'. It is inferred from the string literal.
}

