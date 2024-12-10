import { ComponentFixture, TestBed } from '@angular/core/testing'

import { HelpTopicComponent } from './help-topic.component'

describe('HelpTopicComponent', () => {
  let component: HelpTopicComponent
  let fixture: ComponentFixture<HelpTopicComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpTopicComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(HelpTopicComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
