import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PagesMenuDropdownComponent } from './pages-menu-dropdown.component'

describe('PagesMenuDropdownComponent', () => {
  let component: PagesMenuDropdownComponent
  let fixture: ComponentFixture<PagesMenuDropdownComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagesMenuDropdownComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(PagesMenuDropdownComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
