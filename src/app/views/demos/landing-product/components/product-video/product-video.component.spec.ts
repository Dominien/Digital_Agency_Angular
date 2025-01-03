import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ProductVideoComponent } from './product-video.component'

describe('ProductVideoComponent', () => {
  let component: ProductVideoComponent
  let fixture: ComponentFixture<ProductVideoComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductVideoComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(ProductVideoComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
