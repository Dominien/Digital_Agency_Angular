import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CareerSingleComponent } from './career-single.component'

describe('CareerSingleComponent', () => {
  let component: CareerSingleComponent
  let fixture: ComponentFixture<CareerSingleComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareerSingleComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(CareerSingleComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
