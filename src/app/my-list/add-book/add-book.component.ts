import { Component, Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

interface IBook {
  title: string;
  isbn: string;
  author_name: string;
  subject: [];
}

interface ISearchBook {
  docs: [];
}

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss'],
})
@Injectable({
  providedIn: 'root',
})
export class AddBookComponent {
  status: string = 'Status';
  books: any[] | undefined;
  formGroup: FormGroup;
  filteredBooks: any[] = [];
  selectedBook: IBook = { title: '', isbn: '', author_name: '', subject: [] };

  getBooks(searchValue: string): Observable<ISearchBook> {
    return this.http.get<ISearchBook>(
      'https://openlibrary.org/search.json?q=' +
        searchValue +
        '&limit=5&fields=isbn,title,author_name,subject'
    );
  }

  constructor(private http: HttpClient, private router: Router) {
    this.formGroup = new FormGroup({
      selectedBook: new FormControl<object | null>(null),
    });
  }

  ngOnInit() {
    this.books = [];
  }

  filterCountry(event: AutoCompleteCompleteEvent) {
    let query = event.query;
    this.getBooks(query).subscribe(
      (data) => {
        this.filteredBooks = data.docs;
      },
      (error) => {
        console.error('Error fetching books:', error);
      }
    );
  }

  refreshPage(): void {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['my-list']);
    });
  }

  addBook() {
    const newBook = {
      title: this.selectedBook.title,
      isbn: this.selectedBook.isbn[0],
      author: this.selectedBook.author_name[0],
      subject: this.selectedBook.subject,
      status: this.status,
    };
    this.http.post('http://localhost:3000/books', newBook).subscribe();
    this.refreshPage();
  }
}
