import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { CarroPageRoutingModule } from './carro-routing.module';

import { CarroPage } from './carro.page';
import {ApiLibrosService} from './../servicio/api-libros.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    HttpClientModule,
    CarroPageRoutingModule
  ],
  declarations: [CarroPage],
  providers: [ApiLibrosService]
})
export class CarroPageModule {}
