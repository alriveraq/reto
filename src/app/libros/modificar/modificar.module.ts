import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarPageRoutingModule } from './modificar-routing.module';

import { ModificarPage } from './modificar.page';
import { ApiLibrosService } from './../servicio/api-libros.service'

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    ModificarPageRoutingModule
  ],
  declarations: [ModificarPage],
  providers: [ApiLibrosService]
})
export class ModificarPageModule {}
