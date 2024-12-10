import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { testimonials } from '../../data'
import { register } from 'swiper/element'
import { SwiperDirective } from '@/app/components/swiper-directive.component'
import { Pagination } from 'swiper/modules'
import type { SwiperOptions } from 'swiper/types'
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap'
register()

@Component({
  selector: 'aboutV3-testimonials',
  standalone: true,
  imports: [SwiperDirective, NgbRatingModule],
  templateUrl: './testimonials.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TestimonialsComponent {
  testimonialData = testimonials

  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
      el: '#swiper-pagination',
    },
  }
}
