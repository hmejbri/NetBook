import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BookService } from '../../books.service';

@Component({
  selector: 'app-books-by-genre',
  templateUrl: './books-by-genre.component.html',
  styleUrls: ['./books-by-genre.component.scss'],
})
export class BooksByGenreComponent {
  @Output() dataToParent = new EventEmitter<string>();
  @Input() genre: string = ' ';
  books: any[] = [];
  title: string = '';
  isbn: string = '';
  src: string = '';

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getBooks(this.genre).subscribe((data) => {
      this.books = data.slice(0, 5);
    });
  }

  sendDataToParent(isbn: string) {
    this.dataToParent.emit(isbn);
  }
}
