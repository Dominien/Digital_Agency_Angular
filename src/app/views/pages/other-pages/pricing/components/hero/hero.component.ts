import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { pricingData } from '../../data'
import { register } from 'swiper/element'
import { SwiperDirective } from '@/app/components/swiper-directive.component'
import type { SwiperOptions } from 'swiper/types'
import { CommonModule } from '@angular/common'
import { Pagination } from 'swiper/modules'
import { currency } from '@/app/common/constants'
register()

@Component({
  selector: 'pricing-hero',
  standalone: true,
  imports: [SwiperDirective, CommonModule],
  templateUrl: './hero.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeroComponent {
  currency = currency
  pricingList = pricingData
  planType: boolean = false

  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    slidesPerView: 1,
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

  changePlan(event: any) {
    this.planType = event.target.checked
  }
}
