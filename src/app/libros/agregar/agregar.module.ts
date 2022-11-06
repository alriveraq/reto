import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarPageRoutingModule } from './agregar-routing.module';

import { AgregarPage } from './agregar.page';
import {ApiLibrosService} from './../servicio/api-libros.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AgregarPageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [AgregarPage],
  providers: [ApiLibrosService]
})
export class AgregarPageModule {}
