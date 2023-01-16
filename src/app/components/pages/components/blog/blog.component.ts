import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent {
  blogs: Array<blogType>;

  constructor() {
    this.blogs = new Array<blogType>();
  }

  ngOnInit() {
    var current = localStorage.getItem('blogs');
    if (current !== null) {
      this.blogs = JSON.parse(current);
    }
    console.log('this.blogs is: ' + this.blogs);
  }

  addBlog(title: any, content: any) {
    let blog = new blogType(title.value, content.value);
    if (localStorage.getItem('blogs')) {
      this.blogs = JSON.parse(localStorage.getItem('blogs')!);
    }

    this.blogs.push(blog); //error occurs because of that line. Runtime error
    localStorage.setItem('blogs', JSON.stringify(this.blogs));
    title.value = '';
    content.value = '';
    alert('Blog Added!');
  }
  removeBlog(blog: any) {
    let index = this.blogs.indexOf(blog);
    //console.log(blog);
    this.blogs.splice(index, 1);
    localStorage.setItem('blogs', JSON.stringify(this.blogs));
    alert('Blog has been Deleted!');
  }
}
export class blogType {
  title: string;
  content: string;

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }
}
