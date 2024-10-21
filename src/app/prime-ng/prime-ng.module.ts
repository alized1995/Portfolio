import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenubarModule,
    ButtonModule,
    ImageModule,
    CardModule
  ],
  exports: [
    CommonModule,
    MenubarModule,
    ButtonModule,
    ImageModule,
    CardModule
  ]
})
export class PrimeNgModule { }
