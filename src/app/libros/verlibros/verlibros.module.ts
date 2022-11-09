import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { VerlibrosPageRoutingModule } from './verlibros-routing.module';

import { VerlibrosPage } from './verlibros.page';
import { ApiLibrosService} from '../servicio/api-libros.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    VerlibrosPageRoutingModule,
    HttpClientModule
  ],
  declarations:[VerlibrosPage],
  providers:[ApiLibrosService]
})
export class VerlibrosPageModule {}
