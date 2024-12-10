import { SwiperDirective } from '@/app/components/swiper-directive.component'
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { register } from 'swiper/element'
import { Autoplay } from 'swiper/modules'
import type { SwiperOptions } from 'swiper/types'
register()

@Component({
  selector: 'servicev2-cta',
  standalone: true,
  imports: [SwiperDirective],
  templateUrl: './cta.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CtaComponent {
  swiperConfig: SwiperOptions = {
    modules: [Autoplay],
    autoplay: true,
    loop: false,
    slidesPerView: 2,
    spaceBetween: 30,
    breakpoints: {
      '576': { slidesPerView: 2 },
      '768': { slidesPerView: 4 },
    },
  }
}
