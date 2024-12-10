import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CreditWithLogoComponent } from './credit-with-logo.component'

describe('CreditWithLogoComponent', () => {
  let component: CreditWithLogoComponent
  let fixture: ComponentFixture<CreditWithLogoComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditWithLogoComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(CreditWithLogoComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
