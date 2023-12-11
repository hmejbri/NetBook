import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent {
  genres: string[] = [
    'Romance',
    'Mistery',
    'Horror',
    'Science',
    'Poetry',
    'History',
    'Business',
    'Kids',
  ];
}
