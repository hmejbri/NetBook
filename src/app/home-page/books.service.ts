import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl = 'http://example.com/api/books';

  constructor(private http: HttpClient) {}

  /*getBooks(genre: string): Observable<any> {
    return this.http
      .get<any>(
        'http://openlibrary.org/subjects/' +
          genre +
          '.json?limit=5&fields=title,isbn'
      )
      .pipe(
        map((data) =>
          data.works.filter((book: any) => book.availability.isbn != null)
        )
      );*/

  getBooks(genre: string): Observable<any> {
    return this.http
      .get<any>('http://openlibrary.org/subjects/' + genre + '.json?limit=5')
      .pipe(
        //tap((data) => console.log(data)),
        map((data) => data.works),
        map((works) =>
          works.filter(
            (book: any) => book.availability && book.availability.isbn != null
          )
        ),
        map((works) =>
          works.map((book: any) => ({
            title: book.title,
            availability: book.availability,
          }))
        )
      );
  }
}
