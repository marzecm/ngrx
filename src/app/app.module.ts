import { PostsModule } from './posts/posts.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { postsReducer } from './posts/store/posts.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PostsModule,
    AppRoutingModule,
    StoreModule.forRoot({posts: postsReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 50,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
