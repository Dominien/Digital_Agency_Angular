import { SwiperDirective } from '@/app/components/swiper-directive.component'
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { register } from 'swiper/element'
import type { SwiperOptions } from 'swiper/types'
import { blogCategories } from '../../data'
import { Pagination } from 'swiper/modules'
register()

@Component({
  selector: 'blog-list-category',
  standalone: true,
  imports: [SwiperDirective],
  templateUrl: './blog-category.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BlogCategoryComponent {
  categoryList = blogCategories

  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
      '576': { slidesPerView: 3 },
      '992': { slidesPerView: 5 },
    },
  }
}
