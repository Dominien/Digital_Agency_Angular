import { BreadcrumbComponent } from '@/app/components/breadcrumb/breadcrumb.component'
import { Component } from '@angular/core'
import { HeroComponent } from './components/hero/hero.component'
import { SpecificationComponent } from './components/specification/specification.component'
import { RatingComponent } from './components/rating/rating.component'
import { SimilarProductComponent } from './components/similar-product/similar-product.component'

@Component({
  selector: 'app-single',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    HeroComponent,
    SpecificationComponent,
    RatingComponent,
    SimilarProductComponent,
  ],
  templateUrl: './single.component.html',
  styles: ``,
})
export class SingleComponent {}
