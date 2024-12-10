import { ComponentFixture, TestBed } from '@angular/core/testing'

import { Servicev1Component } from './servicev1.component'

describe('Servicev1Component', () => {
  let component: Servicev1Component
  let fixture: ComponentFixture<Servicev1Component>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Servicev1Component],
    }).compileComponents()

    fixture = TestBed.createComponent(Servicev1Component)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
