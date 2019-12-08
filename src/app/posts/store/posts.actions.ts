import { Post } from './../post.model';
import { Action } from '@ngrx/store';


export const LOAD_POSTS = '[Posts] Load Posts';
export const ADD_POST = '[Posts] Add Post';
export const REMOVE_POST = '[Posts] Remove Post';

export class LoadPosts implements Action {
  public readonly type = LOAD_POSTS;

  constructor(public payload: Post[]) {}
}

export class AddPost implements Action {
  public readonly type = ADD_POST;

  constructor(public payload: Post) {}
}

export class RemovePost implements Action {
  public readonly type = REMOVE_POST;

  constructor(public payload: number) {}
}

export type PostsActions = LoadPosts | AddPost | RemovePost;
