import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerListComponent } from './computer-list.component';

describe('ComputerListComponent', () => {
  let component: ComputerListComponent;
  let fixture: ComponentFixture<ComputerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputerListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComputerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
