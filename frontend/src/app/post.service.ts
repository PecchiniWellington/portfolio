import { Injectable } from "@angular/core";
import { IPost } from "./interfaces/post.interface";

@Injectable({
  providedIn: "root",
})
export class PostService {
  private posts: IPost[] = [];

  public getPosts(): IPost[] {
    return [...this.posts];
  }
  public addPost(p: IPost) {
    const post: IPost = { title: p.title, description: p.description };
    this.posts.push(post);
  }

  constructor() {}
}
