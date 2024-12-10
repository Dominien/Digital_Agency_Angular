import { Component } from '@angular/core'
import { PageHeadingComponent } from '../components/page-heading/page-heading.component'
import { wishlistItems } from './data'
import { SentenceCasePipe } from '@/app/core/helpers/sentence-case.pipe'

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [PageHeadingComponent, SentenceCasePipe],
  templateUrl: './wishlist.component.html',
  styles: ``,
})
export class WishlistComponent {
  wishlist = wishlistItems
}
