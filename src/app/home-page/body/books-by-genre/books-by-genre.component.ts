import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-books-by-genre',
  templateUrl: './books-by-genre.component.html',
  styleUrls: ['./books-by-genre.component.scss'],
})
export class BooksByGenreComponent {
  @Input() genre: string = ' ';
}
