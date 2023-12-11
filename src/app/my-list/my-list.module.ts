import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyListComponent } from './my-list.component';
import { AddBookComponent } from './add-book/add-book.component';
import { BookListComponent } from './book-list/book-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DetailsModalComponent } from '../details-modal/details-modal.component';
import { MyListServiceService } from '../my-list-service.service';

@NgModule({
  declarations: [
    MyListComponent,
    AddBookComponent,
    BookListComponent,
    DetailsModalComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    AutoCompleteModule,
  ],
  providers: [MyListServiceService],
})
export class MyListModule {}
