import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicsDetailComponent } from './graphics-detail.component';

describe('GraphicsDetailComponent', () => {
  let component: GraphicsDetailComponent;
  let fixture: ComponentFixture<GraphicsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
