import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDialogAccountComponent } from './user-dialog-account.component';

describe('UserDialogAccountComponent', () => {
  let component: UserDialogAccountComponent;
  let fixture: ComponentFixture<UserDialogAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDialogAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDialogAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
