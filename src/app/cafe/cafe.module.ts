import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CafeList } from './cafe-list/cafe-list.component';

@NgModule({
  declarations: [CafeList],
  imports: [CommonModule],
  exports: [CafeList],
})
export class CafeModule {}
