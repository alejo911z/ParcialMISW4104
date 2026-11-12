import { Component, OnInit, computed, signal } from '@angular/core';
import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service';


@Component({
  selector: 'app-cafe-list',
  standalone: false,
  templateUrl: './cafe-list.component.html',
  styleUrl: './cafe-list.component.css',
  
})
export class CafeList implements OnInit {
  cafes = signal<Cafe[]>([]);
  totalOrigen = computed(
    () => this.cafes().filter((cafe) => cafe.tipo === 'Café de Origen').length
  );
  totalBlend = computed(
    () => this.cafes().filter((cafe) => cafe.tipo === 'Blend').length
  );
  constructor(private cafeService: CafeService) {}


  getCafes(): void {
    this.cafeService.getCafes().subscribe((cafes) => {
      this.cafes.set(cafes);
    });
  }

  ngOnInit(): void {
    this.getCafes();
  }
  
}