// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyListComponent } from './my-list/my-list.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: 'my-list', component: MyListComponent },
  { path: '', component: HomePageComponent },
  // Other routes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
