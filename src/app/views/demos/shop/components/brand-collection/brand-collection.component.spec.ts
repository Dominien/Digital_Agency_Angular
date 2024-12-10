import { ComponentFixture, TestBed } from '@angular/core/testing'

import { BrandCollectionComponent } from './brand-collection.component'

describe('BrandCollectionComponent', () => {
  let component: BrandCollectionComponent
  let fixture: ComponentFixture<BrandCollectionComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandCollectionComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(BrandCollectionComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
