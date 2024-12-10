import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ApprochesComponent } from './approches.component'

describe('ApprochesComponent', () => {
  let component: ApprochesComponent
  let fixture: ComponentFixture<ApprochesComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApprochesComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(ApprochesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
