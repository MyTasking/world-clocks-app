import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module'; 


import { WorldClocksComponent } from './world-clocks/world-clocks.component';
import { AddTimezoneDialogComponent } from './add-timezone-dialog/add-timezone-dialog.component';

@NgModule({
  declarations: [
    WorldClocksComponent,
    AddTimezoneDialogComponent, 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    AppRoutingModule, 
  ],
  providers: [],
  bootstrap: [WorldClocksComponent],
})
export class AppModule { }
