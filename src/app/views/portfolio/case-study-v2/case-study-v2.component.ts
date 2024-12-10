import { HorizontalMenuComponent } from '@/app/components/app-menu/components/horizontal-menu/horizontal-menu.component'
import { BreadcrumbComponent } from '@/app/components/breadcrumb/breadcrumb.component'
import { Footer1Component } from '@/app/components/footer/footer1/footer1.component'
import { StickyHeaderComponent } from '@/app/components/sticky-header.component'
import { SwiperDirective } from '@/app/components/swiper-directive.component'
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { LightgalleryModule } from 'lightgallery/angular'
import { register } from 'swiper/element'
import { Pagination } from 'swiper/modules'
import { SwiperOptions } from 'swiper/types'
register()

@Component({
  selector: 'app-case-study-v2',
  standalone: true,
  imports: [
    StickyHeaderComponent,
    HorizontalMenuComponent,
    BreadcrumbComponent,
    LightgalleryModule,
    SwiperDirective,
    SwiperDirective,
    Footer1Component,
    RouterModule,
  ],
  templateUrl: './case-study-v2.component.html',
  styleUrl: './case-study-v2.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CaseStudyV2Component {
  setting = {
    download: false,
    counter: false,
    selector: 'a',
  }

  swiperContainer: SwiperOptions = {
    modules: [Pagination],
    loop: false,
    spaceBetween: 40,
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
      '576': { slidesPerView: 1 },
      '768': { slidesPerView: 2 },
      '1200': { slidesPerView: 3 },
    },
  }
}
