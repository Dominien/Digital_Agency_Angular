import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CartFaqComponent } from './cart-faq.component'

describe('CartFaqComponent', () => {
  let component: CartFaqComponent
  let fixture: ComponentFixture<CartFaqComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartFaqComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(CartFaqComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
