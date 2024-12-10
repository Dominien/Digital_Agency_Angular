import { ComponentFixture, TestBed } from '@angular/core/testing'

import { Features1Component } from './features1.component'

describe('Features1Component', () => {
  let component: Features1Component
  let fixture: ComponentFixture<Features1Component>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Features1Component],
    }).compileComponents()

    fixture = TestBed.createComponent(Features1Component)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
