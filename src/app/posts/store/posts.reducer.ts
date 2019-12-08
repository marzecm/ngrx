import { Post } from './../post.model';
import * as PostActions from './posts.actions';

export interface State {
  posts: Post[];
  loading: boolean;
}

// tslint:disable: max-line-length
const initialState: State = {
  loading: false,
  posts: [
    {
      userId: 1,
      id: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    },
    {
      userId: 1,
      id: 2,
      title: 'qui est esse',
      body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
    },
  ],
};

export function postsReducer(state = initialState, action: PostActions.PostsActions): State {
  switch(action.type) {
    case PostActions.LOAD_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case PostActions.ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case PostActions.REMOVE_POST:
      const newPosts = state.posts.filter(
        (_, index: number) => index !== action.payload,
      );
      return {
        ...state,
        posts: newPosts,
      };
    default:
    return state;
  }
}
