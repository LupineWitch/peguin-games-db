import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePublisherComponent } from './delete-publisher.component';

describe('DeletePublisherComponent', () => {
  let component: DeletePublisherComponent;
  let fixture: ComponentFixture<DeletePublisherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletePublisherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePublisherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
