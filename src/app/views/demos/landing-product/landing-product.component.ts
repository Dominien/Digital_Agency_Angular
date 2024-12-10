import { Component } from '@angular/core'
import { HeroComponent } from './components/hero/hero.component'
import { ProductComponent } from './components/product/product.component'
import { TechnicalDetailComponent } from './components/technical-detail/technical-detail.component'
import { TestimonialCardComponent } from './components/testimonial-card/testimonial-card.component'
import { FeatureComponent } from './components/feature/feature.component'
import { StickyHeaderComponent } from '@/app/components/sticky-header.component'
import { HorizontalMenuComponent } from '@/app/components/app-menu/components/horizontal-menu/horizontal-menu.component'
import { Features2Component } from './components/features2/features2.component'
import { ProductListComponent } from './components/product-list/product-list.component'
import { ProductVideoComponent } from './components/product-video/product-video.component'
import { Footer6Component } from '@/app/components/footer/footer6/footer6.component'

@Component({
  selector: 'app-landing-product',
  standalone: true,
  imports: [
    HeroComponent,
    ProductComponent,
    TechnicalDetailComponent,
    TestimonialCardComponent,
    FeatureComponent,
    StickyHeaderComponent,
    HorizontalMenuComponent,
    Features2Component,
    ProductListComponent,
    ProductVideoComponent,
    Footer6Component,
  ],
  templateUrl: './landing-product.component.html',
  styles: ``,
})
export class LandingProductComponent {}
