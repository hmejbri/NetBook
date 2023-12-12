// add-book.component.ts
import { Component, Injectable } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MyListServiceService } from 'src/app/my-list-service.service';

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

  constructor(
    private bookService: MyListServiceService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.formGroup = new FormGroup({
      selectedBook: new FormControl<object | null>(null),
    });
  }

  ngOnInit() {
    this.books = [];
    this.formGroup = this.formBuilder.group({
      selectedBook: ['', Validators.required],
      status: ['', Validators.required],
    });
  }

  filterBook(event: AutoCompleteCompleteEvent) {
    let query = event.query;
    this.bookService.searchBooks(query).subscribe(
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
    if (this.formGroup.valid) {
      const newBook = {
        title: this.formGroup.value.selectedBook.title,
        isbn: this.formGroup.value.selectedBook.isbn[0],
        author: this.formGroup.value.selectedBook.author_name[0],
        subject: this.formGroup.value.selectedBook.subject,
        status: this.formGroup.value.status,
      };

      this.bookService.addBook(newBook);
      this.refreshPage();
    }
  }
}
