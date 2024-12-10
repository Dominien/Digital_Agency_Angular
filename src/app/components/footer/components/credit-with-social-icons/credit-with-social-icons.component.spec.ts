import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CreditWithSocialIconsComponent } from './credit-with-social-icons.component'

describe('CreditWithSocialIconsComponent', () => {
  let component: CreditWithSocialIconsComponent
  let fixture: ComponentFixture<CreditWithSocialIconsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditWithSocialIconsComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(CreditWithSocialIconsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
