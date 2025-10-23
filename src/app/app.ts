
import { CommonModule } from '@angular/common';
import { Post } from './services/post';
import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  title = signal('api-app');
  posts: any;

  constructor(private post: Post) {}

  ngOnInit() {
    this.post.getPosts().subscribe(response => {
      this.posts = response;
      console.log(this.posts);
    });
  }
}
