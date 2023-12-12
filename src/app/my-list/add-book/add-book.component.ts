import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MyListServiceService } from 'src/app/my-list-service.service';
import { AutoCompleteCompleteEvent, IBook } from '../book.model';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss'],
})
export class AddBookComponent {
  status: string = 'Status';
  books: any[] | undefined;
  filteredBooks: any[] = [];
  selectedBook: IBook = { title: '', isbn: '', author_name: '', subject: [] };

  constructor(
    private bookService: MyListServiceService,
    private router: Router
  ) {}

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
    const newBook = {
      title: this.selectedBook.title,
      isbn: this.selectedBook.isbn[0],
      author: this.selectedBook.author_name[0],
      subject: this.selectedBook.subject,
      status: this.status,
    };
    this.bookService.addBook(newBook);
    this.refreshPage();
  }
}
