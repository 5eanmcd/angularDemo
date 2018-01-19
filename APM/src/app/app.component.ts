// 
import {Component} from '@angular/core'
import {ProductService} from './products/products.service'
import { FlightsService } from "./flights/flights.service";

@Component({
  selector: "pm-root",
  template: `<div>
  <h1>{{pageTitle}}</h1>
  <pm-flights></pm-flights>
</div>`,
  providers: [ProductService,
  FlightsService]
})
export class AppComponent {
  pageTitle : string = 'Acme1 Product Management'
}