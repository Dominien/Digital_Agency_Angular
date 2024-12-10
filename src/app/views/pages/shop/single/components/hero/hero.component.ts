import { currency } from '@/app/common/constants'
import { SwiperDirective } from '@/app/components/swiper-directive.component'
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap'
import { products } from '@public/assets/data/products'
import { LightgalleryModule } from 'lightgallery/angular'
import lgVideo from 'lightgallery/plugins/video'
import { register } from 'swiper/element'
import { Navigation } from 'swiper/modules'
import type { SwiperOptions } from 'swiper/types'
register()

@Component({
  selector: 'shop-single-hero',
  standalone: true,
  imports: [SwiperDirective, LightgalleryModule, RouterModule, NgbRatingModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeroComponent {
  productImages = products[0].images
  currency = currency
  swiperConfig: SwiperOptions = {
    modules: [Navigation],
    loop: false,
    grabCursor: true,
    autoplay: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  }

  setting = {
    download: false,
    counter: false,
    plugins: [lgVideo],
    selector: 'a',
  }
}
