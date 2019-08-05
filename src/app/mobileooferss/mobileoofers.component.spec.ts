import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileoofersComponent } from './mobileoofers.component';

describe('MobileoofersComponent', () => {
  let component: MobileoofersComponent;
  let fixture: ComponentFixture<MobileoofersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileoofersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileoofersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
