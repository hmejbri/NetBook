import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
@Injectable({
  providedIn: 'root',
})
export class BookListComponent {
  private booksAPI = 'http://localhost:3000/books';
  booksData: any[] = [];
  selectedBook: string = '';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<any[]> {
    return this.http.get<any[]>(this.booksAPI);
  }

  selectBook(isbn: string) {
    this.selectedBook = isbn;
  }

  ngOnInit() {
    this.getBooks().subscribe(
      (data) => {
        this.booksData = data.reverse();
      },
      (error) => {
        console.error('Error fetching books:', error);
      }
    );
  }
}
