import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorldClocksComponent } from './world-clocks/world-clocks.component';
import { AddTimezoneDialogComponent } from './add-timezone-dialog/add-timezone-dialog.component';

const routes: Routes = [
  { path: 'world-clocks', component: WorldClocksComponent },
  { path: 'world-clocks/add-timezone', component: AddTimezoneDialogComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
