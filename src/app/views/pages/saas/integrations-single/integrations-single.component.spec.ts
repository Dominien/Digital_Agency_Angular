import { ComponentFixture, TestBed } from '@angular/core/testing'

import { IntegrationsSingleComponent } from './integrations-single.component'

describe('IntegrationsSingleComponent', () => {
  let component: IntegrationsSingleComponent
  let fixture: ComponentFixture<IntegrationsSingleComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntegrationsSingleComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(IntegrationsSingleComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
