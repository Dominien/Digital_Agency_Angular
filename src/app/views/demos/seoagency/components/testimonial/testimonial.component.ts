import { SwiperDirective } from '@/app/components/swiper-directive.component'
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { register } from 'swiper/element'
import { Autoplay, Pagination } from 'swiper/modules'
import { SwiperOptions } from 'swiper/types'
import { testimonials } from '../../data'
register()

@Component({
  selector: 'seo-testimonial',
  standalone: true,
  imports: [SwiperDirective],
  templateUrl: './testimonial.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TestimonialComponent {
  testimonials = testimonials
  testimonialSwiper: SwiperOptions = {
    modules: [Autoplay, Pagination],
    spaceBetween: 30,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    pagination: {
      el: '#footerPagination',
      clickable: true,
    },
  }
}
