import { Component } from '@angular/core'

@Component({
  selector: 'singleV2-blog-sidebar',
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

  relatedPost = [
    '5 investment doubts you should clarify',
    'Mastering Responsive Web Design with Bootstrap',
    'Effortless Web Development with Mizzle',
    'Sleek and Responsive - Designing with Bootstrap and Mizzle',
    'Ten questions you should answer truthfully.',
  ]
}
