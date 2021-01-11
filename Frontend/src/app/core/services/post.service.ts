import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Post} from '../models/Post';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseURL = 'http://localhost:8000/ws/';

  constructor(private http: HttpClient) { }

  getPost(id: number): Observable<Post> {
    const url = this.baseURL + 'post?id=' + id;
    return this.http.get<Post>(url);
  }

  getPosts(id: number): Observable<Post[]> {
    const url = this.baseURL + 'posts?blog=' + id;
    return this.http.get<Post[]>(url);
  }

<<<<<<< HEAD
  likePost(id: number): Observable<any> {
    const url = this.baseURL + 'like_post';
    console.log(id);
    return this.http.post(url, {'post': id}, httpOptions);
  }

=======
  createPost(blod_id: number, title: string, text: string): Observable<Post[]> {
    let data = {
      'title': title,
      'text': text,
      'blog': blod_id,
    }
    const url = this.baseURL + 'new_post?blog=' + blod_id;
    return this.http.post<Post[]>(url, data);
  }
>>>>>>> 893a388adc05b799ca5cef6efd892dfdbb78754b
}
