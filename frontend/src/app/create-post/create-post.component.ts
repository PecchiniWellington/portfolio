import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { NgForm } from "@angular/forms";
import { IPost } from "../interfaces/post.interface";
import { PostService } from "../post.service";

@Component({
  selector: "app-create-post",
  templateUrl: "./create-post.component.html",
  styleUrls: ["./create-post.component.scss"],
})
export class CreatePostComponent implements OnInit {
  @Output() public postCreated: EventEmitter<IPost> = new EventEmitter();

  constructor(private postService: PostService) {}

  public onCreate(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    const post: IPost = {
      title: form.value.title,
      description: form.value.description,
    };
    this.postService.addPost(post);
  }

  ngOnInit() {}
}
