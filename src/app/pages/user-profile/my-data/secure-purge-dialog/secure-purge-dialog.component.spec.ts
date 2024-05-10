import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurePurgeDialogComponent } from './secure-purge-dialog.component';

describe('SecurePurgeDialogComponent', () => {
  let component: SecurePurgeDialogComponent;
  let fixture: ComponentFixture<SecurePurgeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurePurgeDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurePurgeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
