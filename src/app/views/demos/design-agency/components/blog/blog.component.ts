import { Component } from '@angular/core'
import { blogs } from '../../data'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'design-agency-blog',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './blog.component.html',
  styles: ``,
})
export class BlogComponent {
  blogsData = blogs
}
