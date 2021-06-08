import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDistributionComponent } from './delete-distribution.component';

describe('DeleteDistributionComponent', () => {
  let component: DeleteDistributionComponent;
  let fixture: ComponentFixture<DeleteDistributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteDistributionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
