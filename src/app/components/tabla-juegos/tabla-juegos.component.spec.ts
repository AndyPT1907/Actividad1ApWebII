import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaJuegosComponent } from './tabla-juegos.component';

describe('TablaJuegosComponent', () => {
  let component: TablaJuegosComponent;
  let fixture: ComponentFixture<TablaJuegosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaJuegosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablaJuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
