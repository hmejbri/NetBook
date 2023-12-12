import {
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
  NgModule,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyListComponent } from './my-list.component';
import { AddBookComponent } from './add-book/add-book.component';
import { BookListComponent } from './book-list/book-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DetailsModalModule } from '../details-modal/details-modal.module';
import { DetailsModalComponent } from '../details-modal/details-modal.component';

@NgModule({
  declarations: [
    MyListComponent,
    AddBookComponent,
    BookListComponent,
    // DetailsModalComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    AutoCompleteModule,
    DetailsModalModule,
  ],

  //schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class MyListModule {}
