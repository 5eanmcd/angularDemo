import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';


import { HttpClientModule } from '@angular/common/http';
import { FlightListComponent } from "./flights/flight-list.component";

// import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    FlightListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
    // HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
