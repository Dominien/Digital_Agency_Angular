import { Component } from '@angular/core'
import { PageHeadingComponent } from '../components/page-heading/page-heading.component'
import { ordersData } from './data'
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap'
import { CommonModule } from '@angular/common'
import { SentenceCasePipe } from '@/app/core/helpers/sentence-case.pipe'
import { currency } from '@/app/common/constants'

@Component({
  selector: 'app-order-history',
  standalone: true,
  imports: [
    PageHeadingComponent,
    NgbPaginationModule,
    CommonModule,
    SentenceCasePipe,
  ],
  templateUrl: './order-history.component.html',
  styles: ``,
})
export class OrderHistoryComponent {
  ordersList = ordersData
  currency = currency
}
