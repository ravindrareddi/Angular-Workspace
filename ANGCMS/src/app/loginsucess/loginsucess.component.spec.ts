import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginsucessComponent } from './loginsucess.component';

describe('LoginsucessComponent', () => {
  let component: LoginsucessComponent;
  let fixture: ComponentFixture<LoginsucessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginsucessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginsucessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
