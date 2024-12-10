import { SwiperDirective } from '@/app/components/swiper-directive.component'
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { Pagination } from 'swiper/modules'
import { SwiperOptions } from 'swiper/types'

@Component({
  selector: 'mobile-show-case-steps',
  standalone: true,
  imports: [SwiperDirective],
  templateUrl: './steps.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class StepsComponent {
  stepSwiper: SwiperOptions = {
    modules: [Pagination],
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
      '576': { slidesPerView: 1 },
      '768': { slidesPerView: 2 },
      '992': { slidesPerView: 3 },
    },
  }
}
