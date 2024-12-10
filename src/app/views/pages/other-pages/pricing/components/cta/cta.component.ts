import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { clients } from '../../data'
import { register } from 'swiper/element'
import { SwiperDirective } from '@/app/components/swiper-directive.component'
import type { SwiperOptions } from 'swiper/types'
import { Autoplay } from 'swiper/modules'
register()

@Component({
  selector: 'pricing-cta',
  standalone: true,
  imports: [SwiperDirective],
  templateUrl: './cta.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CtaComponent {
  clientList = clients

  swiperConfig: SwiperOptions = {
    modules: [Autoplay],
    autoplay: true,
    loop: false,
    slidesPerView: 2,
    spaceBetween: 30,
    breakpoints: {
      '576': { slidesPerView: 2 },
      '768': { slidesPerView: 3 },
      '992': { slidesPerView: 4 },
      '1200': { slidesPerView: 5 },
    },
  }
}
