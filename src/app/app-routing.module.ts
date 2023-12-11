import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyListComponent } from './my-list/my-list.component';
import { QuoteComponent } from './quote/quote.component';

const routes: Routes = [
  { path: 'my-list', component: MyListComponent },
  { path: 'quote', component: QuoteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
