import { ComponentFixture, TestBed } from '@angular/core/testing'

import { GetStartedJourneyComponent } from './get-started-journey.component'

describe('GetStartedJourneyComponent', () => {
  let component: GetStartedJourneyComponent
  let fixture: ComponentFixture<GetStartedJourneyComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetStartedJourneyComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(GetStartedJourneyComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
