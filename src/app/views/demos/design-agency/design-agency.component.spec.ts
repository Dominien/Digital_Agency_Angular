import { ComponentFixture, TestBed } from '@angular/core/testing'

import { DesignAgencyComponent } from './design-agency.component'

describe('DesignAgencyComponent', () => {
  let component: DesignAgencyComponent
  let fixture: ComponentFixture<DesignAgencyComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignAgencyComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(DesignAgencyComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
