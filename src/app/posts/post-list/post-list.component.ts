import { Post } from './../post.model';
import { AppState } from './../../store/app.reducer';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromPosts from '../store/posts.reducer';
import * as PostActions from '../store/posts.actions';
import { Dictionary } from '@ngrx/entity';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  public posts$: Observable<fromPosts.State>;

  public allPosts$: Observable<Post[]>;

  public postsEntities$: Observable<Dictionary<Post>>;

  public posts: Post[];

  public isLoading: boolean;

  public postsCount: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.posts$ = this.store.pipe(
      select(fromPosts.getPostsState),
    );

    this.postsEntities$ = this.store.pipe(
      select(fromPosts.selectPostsEntities),
    );

    this.allPosts$ = this.store.pipe(
      select(fromPosts.selectAllPost),
    );

    this.allPosts$.subscribe(
      (posts: Post[]) => this.posts = posts,
    );

    this.store.pipe(
      select(fromPosts.selectLoading),
    ).subscribe(
      (loading: boolean) => this.isLoading = loading,
    );

    this.store.pipe(
      select(fromPosts.selectPostsCount),
    ).subscribe(
      (count: number) => this.postsCount = count,
    );
  }

  public onLoadPosts() {
    // tslint:disable-next-line: no-use-before-declare
    this.store.dispatch(new PostActions.LoadPosts(POSTS));
  }

  public onAddPost() {
    this.store.dispatch(new PostActions.AddPost({
      userId: 10,
      id: 20,
      title: 'New Post Title',
      body: 'New Post Body',
    }));
  }

  public onRemovePost(index: number) {
    this.store.dispatch(new PostActions.RemovePost(index));
  }

  public onLoadingPostsStart() {
    this.store.dispatch(new PostActions.LoadPostsStart());
  }
}

// tslint:disable: max-line-length
const POSTS: Post[] = [
  {
    userId: 1,
    id: 1,
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
  },
  {
    userId: 1,
    id: 2,
    title: 'qui est esse',
    body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'
  },
  {
    userId: 1,
    id: 3,
    title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
    body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut'
  },
  {
    userId: 1,
    id: 4,
    title: 'eum et est occaecati',
    body: 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit'
  }
];
