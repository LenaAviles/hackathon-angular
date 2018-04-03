import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from '../primeng.module';

import { HeaderComponent } from './navigation/header/header.component';
import { MenuComponent } from './navigation/menu/menu.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengModule,

    HeaderComponent,
    MenuComponent
  ],
  declarations: [HeaderComponent, MenuComponent]
})
export class SharedModule { }
