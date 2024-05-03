import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroMinMaxComponent } from './filtro-min-max.component';

describe('FiltroMinMaxComponent', () => {
  let component: FiltroMinMaxComponent;
  let fixture: ComponentFixture<FiltroMinMaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltroMinMaxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FiltroMinMaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
