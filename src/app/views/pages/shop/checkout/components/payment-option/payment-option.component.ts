import { Component, inject, type TemplateRef } from '@angular/core'
import { paymentOptions } from '../../data'
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'checkout-payment-option',
  standalone: true,
  imports: [NgbModalModule],
  templateUrl: './payment-option.component.html',
  styles: ``,
})
export class PaymentOptionComponent {
  paymentOptions = paymentOptions

  private modalService = inject(NgbModal)

  openModal(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true })
  }
}
