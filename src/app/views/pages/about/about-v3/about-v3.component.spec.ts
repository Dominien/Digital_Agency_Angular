import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AboutV3Component } from './about-v3.component'

describe('AboutV3Component', () => {
  let component: AboutV3Component
  let fixture: ComponentFixture<AboutV3Component>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutV3Component],
    }).compileComponents()

    fixture = TestBed.createComponent(AboutV3Component)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
