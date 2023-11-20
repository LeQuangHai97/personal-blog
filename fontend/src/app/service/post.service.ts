import { Injectable } from '@angular/core';
import { sample_post } from 'src/data';
import { Post } from '../shared/models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  getAll():Post[] {
    return sample_post;
  }
}
