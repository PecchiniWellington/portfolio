import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { CreatePostComponent } from "./create-post/create-post.component";
import { PostListComponent } from "./post-list/post-list.component";
import { PostService } from "./post.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreatePostComponent,
    PostListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [PostService],
  bootstrap: [AppComponent],
})
export class AppModule {}
