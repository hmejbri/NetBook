// book-list.component.ts

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {
  @Input() myReadingList: any[] = []; // Define an input property to receive the data
}
