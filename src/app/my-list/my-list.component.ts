// my-list.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.scss']  // Correct extension for SCSS file
})
export class MyListComponent {
  // Replace with your actual book data
  myReadingList = [
    { title: 'Book 1', author: 'Author 1', genre: 'Romance', cover: 'https://designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg' },
    { title: 'Book 2', author: 'Author 2', genre: 'Fantasy', cover: 'https://content.wepik.com/statics/90897927/preview-page0.jpg' },
    { title: 'Book 3', author: 'Author 3', genre: 'Mystery', cover: 'book3.jpg' },
    { title: 'Book 1', author: 'Author 1', genre: 'Romance', cover: 'book1.jpg' },
    { title: 'Book 2', author: 'Author 2', genre: 'Fantasy', cover: 'book2.jpg' },
    { title: 'Book 3', author: 'Author 3', genre: 'Mystery', cover: 'book3.jpg' },
    { title: 'Book 1', author: 'Author 1', genre: 'Romance', cover: 'book1.jpg' },
    { title: 'Book 2', author: 'Author 2', genre: 'Fantasy', cover: 'book2.jpg' },
    { title: 'Book 3', author: 'Author 3', genre: 'Mystery', cover: 'book3.jpg' },
    // Add more books as needed
  ];
}
