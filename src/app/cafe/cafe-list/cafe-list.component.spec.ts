import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { CafeList } from './cafe-list.component';
import { Cafe } from '../cafe';

describe('CafeList', () => {
  let component: CafeList;
  let fixture: ComponentFixture<CafeList>;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CafeList],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(CafeList);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.cafes.set([
      new Cafe(1, 'Café Uno', 'Blend', 'Salgar, Antioquia', 'Panela', 1800, 'imagen1.png'),
      new Cafe(2, 'Café Dos', 'Café de Origen', 'Guatapé, Antioquia', 'Cacao', 1700, 'imagen2.png'),
      new Cafe(3, 'Café Tres', 'Blend', 'Chinchiná, Caldas', 'Caramelo', 1900, 'imagen3.png'),
    ]);
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a table with one header row', () => {
    expect(debug.queryAll(By.css('thead tr')).length).toBe(1);
  });

  it('should have three rows in the table body', () => {
    expect(debug.queryAll(By.css('tbody tr')).length).toBe(3);
  });

  it('should have four rows in total: three cafes plus the header', () => {
    expect(debug.queryAll(By.css('tr')).length).toBe(4);
  });
});