import { ComponentFixture, TestBed } from '@angular/core/testing'

import { Servicev2Component } from './servicev2.component'

describe('Servicev2Component', () => {
  let component: Servicev2Component
  let fixture: ComponentFixture<Servicev2Component>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Servicev2Component],
    }).compileComponents()

    fixture = TestBed.createComponent(Servicev2Component)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
