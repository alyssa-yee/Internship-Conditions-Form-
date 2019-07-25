import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailrightsideComponent } from './emailrightside.component';

describe('EmailrightsideComponent', () => {
  let component: EmailrightsideComponent;
  let fixture: ComponentFixture<EmailrightsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailrightsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailrightsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
