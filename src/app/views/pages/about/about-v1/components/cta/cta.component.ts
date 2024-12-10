import { SwiperDirective } from '@/app/components/swiper-directive.component'
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import type { SwiperOptions } from 'swiper/types'
import { register } from 'swiper/element'
import { Autoplay } from 'swiper/modules'
register()

@Component({
  selector: 'about-cta',
  standalone: true,
  imports: [SwiperDirective],
  templateUrl: './cta.component.html',
  styles: ``,
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
      '768': { slidesPerView: 3 },
      '992': { slidesPerView: 4 },
      '1200': { slidesPerView: 4 },
    },
  }
}
