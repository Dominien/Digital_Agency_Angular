import { Component } from '@angular/core'
import { HeroComponent } from './components/hero/hero.component'
import { BlogListComponent } from './components/blog-list/blog-list.component'

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [HeroComponent, BlogListComponent],
  templateUrl: './grid.component.html',
  styles: ``,
})
export class GridComponent {}
