import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { BodyComponent } from './body/body.component';
import { BooksByGenreComponent } from './body/books-by-genre/books-by-genre.component';
import { SearchOutputComponent } from './body/search-output/search-output.component';
import { HomePageComponent } from './home-page.component';

@NgModule({
  declarations: [
    SearchFilterComponent,
    BodyComponent,
    BooksByGenreComponent,
    SearchOutputComponent,
    HomePageComponent,
  ],
  imports: [CommonModule],
  providers: [],
})
export class HomePageModule {}
