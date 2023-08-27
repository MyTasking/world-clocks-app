import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { WorldClocksComponent } from './world-clocks/world-clocks.component';

@NgModule({
  declarations: [

    WorldClocksComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [WorldClocksComponent]
})
export class AppModule { }