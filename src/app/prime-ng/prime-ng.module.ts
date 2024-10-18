import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenubarModule,
    ButtonModule,
    ImageModule
  ],
  exports: [
    CommonModule,
    MenubarModule,
    ButtonModule,
    ImageModule
  ]
})
export class PrimeNgModule { }
