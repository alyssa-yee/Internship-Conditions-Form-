import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailleftsideComponent } from './emailleftside.component';

describe('EmailleftsideComponent', () => {
  let component: EmailleftsideComponent;
  let fixture: ComponentFixture<EmailleftsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailleftsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailleftsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
