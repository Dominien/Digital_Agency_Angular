import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { pricingData, testimonials } from '../../data'
import { NgbNavModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap'
import { register } from 'swiper/element'
import { SwiperDirective } from '@/app/components/swiper-directive.component'
import type { SwiperOptions } from 'swiper/types'
import { Autoplay, Pagination } from 'swiper/modules'
import { currency } from '@/app/common/constants'
register()

@Component({
  selector: 'service-single-pricing',
  standalone: true,
  imports: [NgbNavModule, SwiperDirective, NgbRatingModule],
  templateUrl: './pricing.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PricingComponent {
  pricingList = pricingData
  testimonialData = testimonials
  currency = currency
  swiperConfig: SwiperOptions = {
    modules: [Pagination, Autoplay],
    autoplay: true,
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
    },
  }
}
