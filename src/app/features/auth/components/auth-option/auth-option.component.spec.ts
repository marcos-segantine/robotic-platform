import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthOptionComponent } from './auth-option.component';

describe('AuthOptionComponent', () => {
  let component: AuthOptionComponent;
  let fixture: ComponentFixture<AuthOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthOptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
