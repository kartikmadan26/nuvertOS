import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCompoundFormComponent } from './new-compound-form.component';

describe('NewCompoundFormComponent', () => {
  let component: NewCompoundFormComponent;
  let fixture: ComponentFixture<NewCompoundFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewCompoundFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCompoundFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
