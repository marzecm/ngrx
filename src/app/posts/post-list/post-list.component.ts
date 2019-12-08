import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  public posts$: Observable<any>;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.posts$ = this.store.select('posts');
  }
}
