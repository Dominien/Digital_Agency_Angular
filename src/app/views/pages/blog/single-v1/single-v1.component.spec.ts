import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SingleV1Component } from './single-v1.component'

describe('SingleV1Component', () => {
  let component: SingleV1Component
  let fixture: ComponentFixture<SingleV1Component>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleV1Component],
    }).compileComponents()

    fixture = TestBed.createComponent(SingleV1Component)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
