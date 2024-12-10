import { currency } from '@/app/common/constants'
import { JarallaxDirective } from '@/app/components/jarallax-directive.component'
import { SwiperDirective } from '@/app/components/swiper-directive.component'
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { register } from 'swiper/element'
import { Autoplay, Navigation } from 'swiper/modules'
import { SwiperOptions } from 'swiper/types'
register()
@Component({
  selector: 'shop-latest-collections',
  standalone: true,
  imports: [SwiperDirective, JarallaxDirective],
  templateUrl: './latest-collections.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LatestCollectionsComponent {
  currency = currency
  collectionSwiper: SwiperOptions = {
    modules: [Autoplay, Navigation],
    spaceBetween: 30,
    grabCursor: true,
    speed: 1000,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
      pauseOnMouseEnter: true,
    },
    breakpoints: {
      '576': { slidesPerView: 1 },
      '768': { slidesPerView: 2 },
      '992': { slidesPerView: 3 },
      '1200': { slidesPerView: 2 },
    },
  }
}
