import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBookDetails, ISearchBook, IBookKey } from './my-list/book.model';

@Injectable({
  providedIn: 'root',
})
export class MyListServiceService {
  private booksAPI = 'http://localhost:3000/books';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<any[]> {
    return this.http.get<any[]>(this.booksAPI);
  }

  searchBooks(query: string): Observable<ISearchBook> {
    return this.http.get<ISearchBook>(
      'https://openlibrary.org/search.json?q=' +
        query +
        '&limit=5&fields=isbn,title,author_name,subject'
    );
  }

  addBook(book: any) {
    this.http.post('http://localhost:3000/books', book).subscribe();
  }

  getBookKey(isbn: string): Observable<IBookKey> {
    return this.http.get<IBookKey>(
      'https://openlibrary.org/isbn/' + isbn + '.json'
    );
  }

  getBookDetails(key: string): Observable<IBookDetails> {
    return this.http.get<IBookDetails>(
      'https://openlibrary.org/books/' + key + '.json?details=true'
    );
  }
}
