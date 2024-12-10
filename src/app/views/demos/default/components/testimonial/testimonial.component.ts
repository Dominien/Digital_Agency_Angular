import { SwiperDirective } from '@/app/components/swiper-directive.component'
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { register } from 'swiper/element'
import { Autoplay, Pagination } from 'swiper/modules'
import { SwiperOptions } from 'swiper/types'
import { testimonials, userData } from '../../data'
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap'
register()
@Component({
  selector: 'default-testimonial',
  standalone: true,
  imports: [SwiperDirective, NgbRatingModule],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TestimonialComponent {
  userData = userData
  testimonialSwiperData = testimonials

  testimonialSwiperConfig: SwiperOptions = {
    modules: [Pagination, Autoplay],
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination-primary',
      clickable: true,
    },
    breakpoints: {
      '576': { slidesPerView: 2 },
    },
  }
}
