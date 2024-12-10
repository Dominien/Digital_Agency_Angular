import { ComponentFixture, TestBed } from '@angular/core/testing'

import { DemosMenuDropdownComponent } from './demos-menu-dropdown.component'

describe('DemosMenuDropdownComponent', () => {
  let component: DemosMenuDropdownComponent
  let fixture: ComponentFixture<DemosMenuDropdownComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemosMenuDropdownComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(DemosMenuDropdownComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
