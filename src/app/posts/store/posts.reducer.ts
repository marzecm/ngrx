import { createFeatureSelector, createSelector } from '@ngrx/store';
import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';

import { Post } from './../post.model';
import * as PostActions from './posts.actions';

export interface State extends EntityState<Post> {
  loading: boolean;
}

const postsAdapter: EntityAdapter<Post> = createEntityAdapter<Post>();

export const initialPostsState: State = postsAdapter.getInitialState({
  loading: false,
});

export function postsReducer(state = initialPostsState, action: PostActions.PostsActions): State {
  switch (action.type) {
    case PostActions.LOAD_POSTS_START:
      return {
        ...state,
        loading: true,
      };
    case PostActions.LOAD_POSTS:
      return postsAdapter.addAll(action.payload, state);
    case PostActions.ADD_POST:
      return postsAdapter.addOne(action.payload, state);
    case PostActions.REMOVE_POST:
      return postsAdapter.removeOne(action.payload, state);
    default:
      return state;
  }
}

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = postsAdapter.getSelectors();

export const getPostsState = createFeatureSelector<State>('posts');

export const selectPostsIds = createSelector(getPostsState, selectIds);

export const selectPostsEntities = createSelector(getPostsState, selectEntities);

export const selectAllPost = createSelector(getPostsState, selectAll);

export const selectPostsCount = createSelector(getPostsState, selectTotal);

export const selectLoading = createSelector(
  getPostsState,
  (s: State) => s.loading,
);
