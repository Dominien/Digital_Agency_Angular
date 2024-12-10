import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CustomerStorySingleComponent } from './customer-story-single.component'

describe('CustomerStorySingleComponent', () => {
  let component: CustomerStorySingleComponent
  let fixture: ComponentFixture<CustomerStorySingleComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerStorySingleComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(CustomerStorySingleComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
