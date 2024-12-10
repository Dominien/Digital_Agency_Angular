import { ComponentFixture, TestBed } from '@angular/core/testing'

import { FeatureSection2Component } from './feature-section2.component'

describe('FeatureSection2Component', () => {
  let component: FeatureSection2Component
  let fixture: ComponentFixture<FeatureSection2Component>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureSection2Component],
    }).compileComponents()

    fixture = TestBed.createComponent(FeatureSection2Component)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
