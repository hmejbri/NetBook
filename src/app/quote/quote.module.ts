import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteComponent } from './quote.component';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    QuoteComponent,
    SearchComponent
  ],
  imports: [
    CommonModule
  ]
})
export class QuoteModule { }
