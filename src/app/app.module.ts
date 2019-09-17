import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodComponent } from './food/food.component'; 

import { FormsModule } from '@angular/forms';
import { FoodDetailComponent } from './food-detail/food-detail.component'; // Tambahkan forms module(1)

@NgModule({
  declarations: [
    AppComponent,
    FoodComponent,
    FoodDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // tambahkan ini forms module (2)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
