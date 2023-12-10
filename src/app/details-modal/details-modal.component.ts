import {
  Component,
  Input,
  OnChanges,
  ViewChild,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface IBookKey {
  key: string;
}

interface IBookDetails {
  title: string;
}

@Component({
  selector: 'app-details-modal',
  templateUrl: './details-modal.component.html',
  styleUrls: ['./details-modal.component.scss'],
})
@Injectable({
  providedIn: 'root',
})
export class DetailsModalComponent implements OnChanges {
  @Input() selectedBook: any;
  @ViewChild('myModal') myModal!: ElementRef;
  bookDetails: any;

  constructor(private http: HttpClient, private renderer: Renderer2) {}

  get_Book_Key(): Observable<IBookKey> {
    return this.http.get<IBookKey>(
      'https://openlibrary.org/isbn/' + this.selectedBook + '.json'
    );
  }

  get_Book_details(key: string): Observable<IBookDetails> {
    return this.http.get<IBookDetails>(
      'https://openlibrary.org/books/' + key + '.json?details=true'
    );
  }

  ngOnChanges(): void {
    if (this.selectedBook) {
      this.get_Book_Key().subscribe(
        (data: IBookKey) => {
          const parts = data.key.split('/books/');

          this.get_Book_details(parts[1]).subscribe(
            (detailsData: IBookDetails) => {
              this.bookDetails = detailsData;
            },
            (error) => {
              console.error('Error fetching book details:', error);
            }
          );
        },
        (error) => {
          console.error('Error fetching key:', error);
        }
      );
    }
  }

  ngAfterViewInit() {
    // Add event listener for Bootstrap modal hidden event
    this.renderer.listen(this.myModal.nativeElement, 'hidden.bs.modal', () => {
      this.bookDetails = '';
    });
  }
}
