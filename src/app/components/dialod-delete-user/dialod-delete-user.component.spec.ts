import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialodDeleteUserComponent } from './dialod-delete-user.component';

describe('DialodDeleteUserComponent', () => {
  let component: DialodDeleteUserComponent;
  let fixture: ComponentFixture<DialodDeleteUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialodDeleteUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialodDeleteUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
