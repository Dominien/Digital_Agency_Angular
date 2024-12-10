import { SwiperDirective } from '@/app/components/swiper-directive.component'
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { register } from 'swiper/element'
import { Pagination } from 'swiper/modules'
import { SwiperOptions } from 'swiper/types'
import { featuredCategoriesData } from '../../data'
import { DomSanitizer } from '@angular/platform-browser'
register()

@Component({
  selector: 'shop-featured-category',
  standalone: true,
  imports: [SwiperDirective],
  templateUrl: './featured-category.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FeaturedCategoryComponent {
  featuredCategory = featuredCategoriesData

  constructor(private sanitizer: DomSanitizer) {}

  featureConfig: SwiperOptions = {
    modules: [Pagination],
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination-primary',
    },
    breakpoints: {
      '576': { slidesPerView: 3 },
      '768': { slidesPerView: 4 },
      '992': { slidesPerView: 5 },
      '1200': { slidesPerView: 6 },
    },
  }

  ngOnInit(): void {
    this.featuredCategory.forEach((item) => {
      item.sanitizedIcon = this.sanitizer.bypassSecurityTrustHtml(item.icon)
    })
  }
}
