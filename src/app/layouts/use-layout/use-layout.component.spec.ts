import { ComponentFixture, TestBed } from '@angular/core/testing'

import { UseLayoutComponent } from './use-layout.component'

describe('UseLayoutComponent', () => {
  let component: UseLayoutComponent
  let fixture: ComponentFixture<UseLayoutComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UseLayoutComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(UseLayoutComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
