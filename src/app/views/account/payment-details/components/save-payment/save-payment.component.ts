import { Component, inject, type TemplateRef } from '@angular/core'
import { savedPaymentMethodsData } from '../../data'
import { CommonModule } from '@angular/common'
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'save-payment',
  standalone: true,
  imports: [CommonModule, NgbModalModule],
  templateUrl: './save-payment.component.html',
  styles: ``,
})
export class SavePaymentComponent {
  paymentMethods = savedPaymentMethodsData

  private modalService = inject(NgbModal)

  openModal(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true })
  }
}
