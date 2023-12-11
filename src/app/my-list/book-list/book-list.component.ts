// book-list.component.ts
import { Component, OnInit } from '@angular/core';
import { MyListServiceService } from 'src/app/my-list-service.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  booksData: any[] = [];
  selectedBook: string = '';

  constructor(private bookService: MyListServiceService) {}

  selectBook(isbn: string) {
    this.selectedBook = isbn;
  }

  ngOnInit() {
    this.bookService.getBooks().subscribe(
      (data) => {
        this.booksData = data.reverse();
      },
      (error) => {
        console.error('Error fetching books:', error);
      }
    );
  }
}
