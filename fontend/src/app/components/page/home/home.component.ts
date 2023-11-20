import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/service/post.service';
import { Post } from 'src/app/shared/models/post';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  posts:Post[] = [];
  constructor(private postSerive:PostService) {
    this.posts = postSerive.getAll();
  }
  
  ngOnInit(): void {
    
  }
}
