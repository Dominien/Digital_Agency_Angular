import { SwiperDirective } from '@/app/components/swiper-directive.component'
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core'
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap'
import Aos from 'aos'
import { register } from 'swiper/element'
import { Autoplay } from 'swiper/modules'
import type { SwiperOptions } from 'swiper/types'
register()

@Component({
  selector: 'feature-single-hero',
  standalone: true,
  imports: [SwiperDirective, NgbProgressbarModule],
  templateUrl: './hero.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit {
  swiperConfig: SwiperOptions = {
    modules: [Autoplay],
    // autoplay:true,
    loop: false,
    slidesPerView: 2,
    spaceBetween: 30,
    breakpoints: {
      '576': { slidesPerView: 3 },
      '768': { slidesPerView: 3 },
      '992': { slidesPerView: 4 },
    },
  }

  ngOnInit(): void {
    Aos.init()
  }
}
