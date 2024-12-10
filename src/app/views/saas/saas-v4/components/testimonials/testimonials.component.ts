import { SwiperDirective } from '@/app/components/swiper-directive.component'
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { register } from 'swiper/element'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { SwiperOptions } from 'swiper/types'
import { statData, testimonials } from '../../data'
import { CountUpModule } from 'ngx-countup'

register()
@Component({
  selector: 'saas-v4-testimonials',
  standalone: true,
  imports: [SwiperDirective, CountUpModule],
  templateUrl: './testimonials.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TestimonialsComponent {
  testimonialsData = testimonials
  statData = statData
  testimonaialConfig: SwiperOptions = {
    modules: [Pagination, Navigation, Autoplay],
    loop: false,
    autoplay: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  }
}
