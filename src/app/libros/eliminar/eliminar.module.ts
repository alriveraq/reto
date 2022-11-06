import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { EliminarPageRoutingModule } from './eliminar-routing.module';

import { EliminarPage } from './eliminar.page';
import { ApiLibrosService } from '../servicio/api-libros.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    EliminarPageRoutingModule,
    HttpClientModule
  ],
  declarations: [EliminarPage],
  providers: [ApiLibrosService]

})
export class EliminarPageModule {}
