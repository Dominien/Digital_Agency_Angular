import { SwiperDirective } from '@/app/components/swiper-directive.component'
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { register } from 'swiper/element'
import { Autoplay, Pagination } from 'swiper/modules'
import { SwiperOptions } from 'swiper/types'
import { testimonials } from '../../data'
register()
@Component({
  selector: 'creative-agency-testimonial',
  standalone: true,
  imports: [SwiperDirective],
  templateUrl: './testimonial.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TestimonialComponent {
  testimonials = testimonials
  swiperConfig: SwiperOptions = {
    modules: [Autoplay, Pagination],
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination-line',
      clickable: true,
    },
  }
}
