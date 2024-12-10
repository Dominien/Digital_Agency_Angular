import { Component } from '@angular/core'
import { blogs } from '../../data'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'saas-v4-blogs',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './blogs.component.html',
  styles: ``,
})
export class BlogsComponent {
  blogsData = blogs
}
