import {Component} from '@angular/core';


//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']

// Metadata decorator:
@Component({
  selector: 'pm-root', // The convention for naming these is to add a prefix for your app. In this case, 'pm' for 'Product Management'
  template: `<div class='welcome-title'><h1>{{pageTitle}}</h1>
        <div>
          Components!!
        </div></div>`,
  styleUrls: ['./app.component.css']
})

// Class:
// By convention, the root component is called AppComponent
export class AppComponent {
  pageTitle: string = 'Acme Product Manager'; // type not required explicitly for 'title'. It is inferred from the string literal.
}

