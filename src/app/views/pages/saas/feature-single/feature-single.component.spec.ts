import { ComponentFixture, TestBed } from '@angular/core/testing'

import { FeatureSingleComponent } from './feature-single.component'

describe('FeatureSingleComponent', () => {
  let component: FeatureSingleComponent
  let fixture: ComponentFixture<FeatureSingleComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureSingleComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(FeatureSingleComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
