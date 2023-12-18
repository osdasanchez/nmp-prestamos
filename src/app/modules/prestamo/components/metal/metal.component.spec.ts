import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetalComponent } from './metal.component';

describe('MetalComponent', () => {
  let component: MetalComponent;
  let fixture: ComponentFixture<MetalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MetalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
