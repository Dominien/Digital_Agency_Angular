import { Component } from '@angular/core'
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component'
import { RelatedBlogComponent } from './components/related-blog/related-blog.component'

@Component({
  selector: 'app-single-v1',
  standalone: true,
  imports: [BlogDetailComponent, RelatedBlogComponent],
  templateUrl: './single-v1.component.html',
  styles: ``,
})
export class SingleV1Component {}
