import { SwiperDirective } from '@/app/components/swiper-directive.component'
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { register } from 'swiper/element'
import { Navigation } from 'swiper/modules'
import { SwiperOptions } from 'swiper/types'
import { products } from '../../data'
import { currency } from '@/app/common/constants'
register()
@Component({
  selector: 'landing-product-list',
  standalone: true,
  imports: [SwiperDirective],
  templateUrl: './product-list.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductListComponent {
  productsData = products
  currency = currency
  productList: SwiperOptions = {
    modules: [Navigation],
    loop: false,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      '576': { slidesPerView: 2 },
      '768': { slidesPerView: 2 },
      '992': { slidesPerView: 3 },
    },
  }
}
