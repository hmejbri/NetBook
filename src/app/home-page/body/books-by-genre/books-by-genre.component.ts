import { Component, Input } from '@angular/core';
import { BookService } from '../../books.service';
import { Book } from '../../Book';

@Component({
  selector: 'app-books-by-genre',
  templateUrl: './books-by-genre.component.html',
  styleUrls: ['./books-by-genre.component.scss'],
})
export class BooksByGenreComponent {
  @Input() genre: string = ' ';
  books: any[] = [];
  title: string = '';
  isbn: string = '';
  src: string = '';
  selectedBook: string = '';

  constructor(private bookService: BookService) {}
  ngOnInit(): void {
    this.bookService.getBooks(this.genre).subscribe((data) => {
      this.books = data; // assuming the books are in the 'works' property

      /*this.books.forEach((book: any) => {
        this.title = book.title; // access the title of each book
        this.isbn = book.availability.isbn;
        this.src =
          'https://covers.openlibrary.org/b/isbn/' +
          book.availability.isbn +
          '-L.jpg';
      });*/
    });
  }

  selectBook(isbn: string) {
    this.selectedBook = isbn;
  }
}
