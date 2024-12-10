import { Component } from '@angular/core'

@Component({
  selector: 'blog-list-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './blog-sidebar.component.html',
  styles: ``,
})
export class BlogSidebarComponent {
  popularTags = [
    'blog',
    'business',
    'bootstrap',
    'data science',
    'deep learning',
    'Adventure',
    'Community',
    'Tutorials',
    'Interview',
    'Photography',
    'Classic',
  ]
}
