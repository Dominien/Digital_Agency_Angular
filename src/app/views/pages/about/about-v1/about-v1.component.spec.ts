import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AboutV1Component } from './about-v1.component'

describe('AboutV1Component', () => {
  let component: AboutV1Component
  let fixture: ComponentFixture<AboutV1Component>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutV1Component],
    }).compileComponents()

    fixture = TestBed.createComponent(AboutV1Component)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
