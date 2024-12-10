import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SavePaymentComponent } from './save-payment.component'

describe('SavePaymentComponent', () => {
  let component: SavePaymentComponent
  let fixture: ComponentFixture<SavePaymentComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavePaymentComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(SavePaymentComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
