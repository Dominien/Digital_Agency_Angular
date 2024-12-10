import { SwiperDirective } from '@/app/components/swiper-directive.component'
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { register } from 'swiper/element'
import { Pagination } from 'swiper/modules'
import { SwiperOptions } from 'swiper/types'
import { pricingData } from '../../data'
import { currency } from '@/app/common/constants'
register()

@Component({
  selector: 'saas-v1-pricing',
  standalone: true,
  imports: [SwiperDirective],
  templateUrl: './pricing.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PricingComponent {
  pricingData = pricingData
  currency = currency
  pricingConfig: SwiperOptions = {
    modules: [Pagination],
    loop: false,
    spaceBetween: 40,
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
