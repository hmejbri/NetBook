import {
  NO_ERRORS_SCHEMA,
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { BodyComponent } from './body/body.component';
import { BooksByGenreComponent } from './body/books-by-genre/books-by-genre.component';
import { SearchOutputComponent } from './body/search-output/search-output.component';
import { HomePageComponent } from './home-page.component';
import { DetailsModalComponent } from '../details-modal/details-modal.component';
import { DetailsModalModule } from '../details-modal/details-modal.module';
import { BookService } from './books.service';

@NgModule({
  declarations: [
    SearchFilterComponent,
    BodyComponent,
    BooksByGenreComponent,
    SearchOutputComponent,
    HomePageComponent,
  ],
  imports: [CommonModule, DetailsModalModule],
  providers: [BookService],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class HomePageModule {}
