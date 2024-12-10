import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PortfolioMenuDropdownComponent } from './portfolio-menu-dropdown.component'

describe('PortfolioMenuDropdownComponent', () => {
  let component: PortfolioMenuDropdownComponent
  let fixture: ComponentFixture<PortfolioMenuDropdownComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioMenuDropdownComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(PortfolioMenuDropdownComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
