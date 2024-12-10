import { Component } from '@angular/core'
import { reviews } from '../../data'
import {
  NgbCollapseModule,
  NgbProgressbarModule,
  NgbRatingModule,
} from '@ng-bootstrap/ng-bootstrap'
import lgVideo from 'lightgallery/plugins/video'
import { LightgalleryModule } from 'lightgallery/angular'

@Component({
  selector: 'shop-single-rating',
  standalone: true,
  imports: [
    NgbRatingModule,
    LightgalleryModule,
    NgbProgressbarModule,
    NgbCollapseModule,
  ],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss',
})
export class RatingComponent {
  isCollapsed = true

  reviewsList = reviews
  reviewImages = [
    'assets/images/shop/review/01.jpg',
    'assets/images/shop/review/02.jpg',
    'assets/images/shop/review/03.jpg',
    'assets/images/shop/review/04.jpg',
    'assets/images/shop/review/05.jpg',
  ]

  setting = {
    download: false,
    counter: false,
    plugins: [lgVideo],
    selector: 'a',
  }
}
