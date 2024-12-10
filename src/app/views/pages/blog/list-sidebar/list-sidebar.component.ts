import { Component } from '@angular/core'
import { HeroComponent } from './components/hero/hero.component'
import { OurBlogsComponent } from './components/our-blogs/our-blogs.component'
import { BlogSidebarComponent } from './components/blog-sidebar/blog-sidebar.component'
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-list-sidebar',
  standalone: true,
  imports: [
    HeroComponent,
    OurBlogsComponent,
    BlogSidebarComponent,
    NgbPaginationModule,
  ],
  templateUrl: './list-sidebar.component.html',
  styles: ``,
})
export class ListSidebarComponent {}
