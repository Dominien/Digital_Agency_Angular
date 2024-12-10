import { ComponentFixture, TestBed } from '@angular/core/testing'

import { DigitalJourneyComponent } from './digital-journey.component'

describe('DigitalJourneyComponent', () => {
  let component: DigitalJourneyComponent
  let fixture: ComponentFixture<DigitalJourneyComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigitalJourneyComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(DigitalJourneyComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
