import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { blogs } from '../../data'
import { SwiperDirective } from '@/app/components/swiper-directive.component'
import { RouterModule } from '@angular/router'
import { SwiperOptions } from 'swiper/types'
import { Autoplay, Navigation } from 'swiper/modules'
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'saas-v5-blogs',
  standalone: true,
  imports: [SwiperDirective, RouterModule, NgbPopoverModule],
  templateUrl: './blogs.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BlogsComponent {
  blogsData = blogs

  swiperConfig: SwiperOptions = {
    modules: [Navigation, Autoplay],
    loop: true,
    autoplay: true,
    spaceBetween: 40,
    grabCursor: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      '576': { slidesPerView: 1 },
      '768': { slidesPerView: 2 },
      '992': { slidesPerView: 2 },
    },
  }
}
