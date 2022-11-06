import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { LibroPageRoutingModule } from './libro-routing.module';

import { LibroPage } from './libro.page';
import { HttpClientModule } from '@angular/common/http';
import { ApiLibrosService } from '../servicio/api-libros.service';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    LibroPageRoutingModule,
    HttpClientModule,
  ],
  declarations: [LibroPage],
  providers: [ApiLibrosService]
})
export class LibroPageModule {}
