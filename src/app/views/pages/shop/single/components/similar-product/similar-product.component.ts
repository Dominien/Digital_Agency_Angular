import { SwiperDirective } from '@/app/components/swiper-directive.component'
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { trendingProducts } from '@public/assets/data/products'
import { register } from 'swiper/element'
import type { SwiperOptions } from 'swiper/types'
import { ProductCardComponent } from '../product-card/product-card.component'
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap'
register()

@Component({
  selector: 'shop-single-similar-product',
  standalone: true,
  imports: [SwiperDirective, ProductCardComponent, NgbRatingModule],
  templateUrl: './similar-product.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SimilarProductComponent {
  productList = trendingProducts

  swiperConfig: SwiperOptions = {
    spaceBetween: 30,
    grabCursor: true,
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
      '1200': { slidesPerView: 4 },
    },
  }
}
