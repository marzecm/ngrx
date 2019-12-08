import { map } from 'rxjs/operators';
import { Post } from './../post.model';
import { AppState } from './../../store/app.reducer';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromPosts from '../store/posts.reducer';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  public posts$: Observable<fromPosts.State>;

  public posts: Post[];
  public isLoading: boolean;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.posts$ = this.store.select('posts');

    this.posts$.pipe(
      map((s: fromPosts.State) => s.posts),
    ).subscribe((posts: Post[]) => this.posts = posts);
  }
}
