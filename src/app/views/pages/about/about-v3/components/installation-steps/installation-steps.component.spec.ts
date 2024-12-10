import { ComponentFixture, TestBed } from '@angular/core/testing'

import { InstallationStepsComponent } from './installation-steps.component'

describe('InstallationStepsComponent', () => {
  let component: InstallationStepsComponent
  let fixture: ComponentFixture<InstallationStepsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstallationStepsComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(InstallationStepsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
