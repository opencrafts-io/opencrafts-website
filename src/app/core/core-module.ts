import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './layout/header/header';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Header,
  ],
  exports: [
    Header,
  ],
})
export class CoreModule { }
