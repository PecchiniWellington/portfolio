import { Component, Input, OnInit } from "@angular/core";
import { IPost } from "../interfaces/post.interface";
import { PostService } from "../post.service";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.scss"],
})
export class PostListComponent implements OnInit {
  /* public posts = [
    { title: "Fist Post", description: "My first description" },
    { title: "Second Post", description: "My Second description" },
    { title: "Third Post", description: "My Third description" },
  ]; */
  public posts: Array<IPost> = [];

  constructor(private postsService: PostService) {}

  ngOnInit() {
    this.posts = this.postsService.getPosts();
  }
}
