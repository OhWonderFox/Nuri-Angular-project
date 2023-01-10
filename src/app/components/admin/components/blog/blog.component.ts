import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  constructor() { }
  blogs = []
  ngOnInit() {

  }
  addBlog(title: any,content: any) {
    //console.log(title.value,content.value);
    //let blog = { "title": any; "content": any }[] = [];

    let blog = {"title": title.value, "content": content.value};
    if(localStorage.getItem("blogs")){
      this.blogs =  JSON.parse(localStorage.getItem("blogs")!)
    }
    //this.blogs.push(blog)
    localStorage.setItem("blogs",JSON.stringify(this.blogs))
    title.value = ""
    content.value = ""
    alert("Blog Added!")

  }

}
