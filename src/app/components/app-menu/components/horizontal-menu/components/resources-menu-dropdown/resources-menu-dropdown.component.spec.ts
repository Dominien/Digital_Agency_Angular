import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ResourcesMenuDropdownComponent } from './resources-menu-dropdown.component'

describe('ResourcesMenuDropdownComponent', () => {
  let component: ResourcesMenuDropdownComponent
  let fixture: ComponentFixture<ResourcesMenuDropdownComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourcesMenuDropdownComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(ResourcesMenuDropdownComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
