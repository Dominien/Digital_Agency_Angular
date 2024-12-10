import { SwiperDirective } from '@/app/components/swiper-directive.component'
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { register } from 'swiper/element'
import { Pagination } from 'swiper/modules'
import { SwiperOptions } from 'swiper/types'
register()

@Component({
  selector: 'seo-services',
  standalone: true,
  imports: [SwiperDirective],
  templateUrl: './services.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ServicesComponent {
  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    loop: false,
    spaceBetween: 30,
    pagination: {
      el: '#seo-pagination',
    },
    breakpoints: {
      '576': { slidesPerView: 1 },
      '768': { slidesPerView: 2 },
      '992': { slidesPerView: 3 },
    },
  }
}
