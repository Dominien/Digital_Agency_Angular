import { ComponentFixture, TestBed } from '@angular/core/testing'

import { DigitalAgencyComponent } from './digital-agency.component'

describe('DigitalAgencyComponent', () => {
  let component: DigitalAgencyComponent
  let fixture: ComponentFixture<DigitalAgencyComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigitalAgencyComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(DigitalAgencyComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
