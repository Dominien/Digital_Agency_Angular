import { SwiperDirective } from '@/app/components/swiper-directive.component'
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { register } from 'swiper/element'
import type { SwiperOptions } from 'swiper/types'
import { testimonials } from '../../data'
import { Autoplay, Pagination } from 'swiper/modules'
import { RouterModule } from '@angular/router'
register()

@Component({
  selector: 'customer-stories2',
  standalone: true,
  imports: [SwiperDirective, RouterModule],
  templateUrl: './stories2.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Stories2Component {
  testimonialData = testimonials

  swiperConfig: SwiperOptions = {
    modules: [Pagination, Autoplay],
    loop: true,

    slidesPerView: 1,
    spaceBetween: 80,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '#story-pagination',
    },
  }
}
