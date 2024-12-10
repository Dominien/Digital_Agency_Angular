import { ComponentFixture, TestBed } from '@angular/core/testing'

import { MegaMenuDropdownComponent } from './mega-menu-dropdown.component'

describe('MegaMenuDropdownComponent', () => {
  let component: MegaMenuDropdownComponent
  let fixture: ComponentFixture<MegaMenuDropdownComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MegaMenuDropdownComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(MegaMenuDropdownComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
