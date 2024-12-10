import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CreditWithLanguageComponent } from './credit-with-language.component'

describe('CreditWithLanguageComponent', () => {
  let component: CreditWithLanguageComponent
  let fixture: ComponentFixture<CreditWithLanguageComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditWithLanguageComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(CreditWithLanguageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
