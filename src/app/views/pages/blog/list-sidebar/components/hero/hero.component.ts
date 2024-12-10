import { Component } from '@angular/core'
import { BlogCategoryComponent } from '../blog-category/blog-category.component'

@Component({
  selector: 'blog-list-hero',
  standalone: true,
  imports: [BlogCategoryComponent],
  templateUrl: './hero.component.html',
  styles: ``,
})
export class HeroComponent {}
