import { ComponentFixture, TestBed } from '@angular/core/testing'

import { VerticalNavigationbarComponent } from './vertical-navigationbar.component'

describe('VerticalNavigationbarComponent', () => {
  let component: VerticalNavigationbarComponent
  let fixture: ComponentFixture<VerticalNavigationbarComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerticalNavigationbarComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(VerticalNavigationbarComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
