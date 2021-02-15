import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewsListComponent } from './overviews-list.component';

describe('OverviewsListComponent', () => {
  let component: OverviewsListComponent;
  let fixture: ComponentFixture<OverviewsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
