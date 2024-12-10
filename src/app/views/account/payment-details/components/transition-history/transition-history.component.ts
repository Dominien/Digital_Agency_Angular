import { Component } from '@angular/core'
import { transactionHistoryData } from '../../data'
import { CommonModule } from '@angular/common'
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap'
import { SentenceCasePipe } from '@/app/core/helpers/sentence-case.pipe'
import { currency } from '@/app/common/constants'

@Component({
  selector: 'transition-history',
  standalone: true,
  imports: [CommonModule, NgbTooltipModule, SentenceCasePipe],
  templateUrl: './transition-history.component.html',
  styles: ``,
})
export class TransitionHistoryComponent {
  transitionList = transactionHistoryData
  currency = currency
}
