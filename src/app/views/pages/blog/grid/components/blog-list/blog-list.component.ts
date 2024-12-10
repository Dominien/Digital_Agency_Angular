import { Component } from '@angular/core'
import { blogs } from '../../data'
import { RouterLink } from '@angular/router'
import {
  NgbPaginationModule,
  NgbPopoverModule,
} from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'blog-list',
  standalone: true,
  imports: [RouterLink, NgbPopoverModule, NgbPaginationModule],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss',
})
export class BlogListComponent {
  blogsList = blogs
}
