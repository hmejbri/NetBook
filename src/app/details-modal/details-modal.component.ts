import {
  Component,
  Input,
  OnChanges,
  ViewChild,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { MyListServiceService } from '../my-list-service.service';
import { IBookDetails } from '../my-list/book.model';

@Component({
  selector: 'app-details-modal',
  templateUrl: './details-modal.component.html',
  styleUrls: ['./details-modal.component.scss'],
})
export class DetailsModalComponent implements OnChanges {
  @Input() selectedBook: any;
  @ViewChild('myModal') myModal!: ElementRef;
  bookDetails: IBookDetails | undefined;

  constructor(
    private bookService: MyListServiceService,
    private renderer: Renderer2
  ) {}

  ngOnChanges(): void {
    if (this.selectedBook) {
      this.bookService.getBookKey(this.selectedBook).subscribe(
        (data) => {
          const parts = data.key.split('/books/');
          this.bookService.getBookDetails(parts[1]).subscribe(
            (detailsData) => {
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
      this.bookDetails = undefined;
    });
  }
}
