import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CreditWithTermsComponent } from './credit-with-terms.component'

describe('CreditWithTermsComponent', () => {
  let component: CreditWithTermsComponent
  let fixture: ComponentFixture<CreditWithTermsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditWithTermsComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(CreditWithTermsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
