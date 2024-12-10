import { SwiperDirective } from '@/app/components/swiper-directive.component'
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { register } from 'swiper/element'
import { SwiperOptions } from 'swiper/types'
import { statData, testimonials } from '../../data'
import { Autoplay, Navigation } from 'swiper/modules'
register()

@Component({
  selector: 'design-agency-testimonial',
  standalone: true,
  imports: [SwiperDirective],
  templateUrl: './testimonial.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TestimonialComponent {
  testimonials = testimonials
  statData = statData
  swiperConfig: SwiperOptions = {
    modules: [Navigation, Autoplay],
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    navigation: {
      nextEl: '.next',
      prevEl: '.previous',
    },
  }
}
