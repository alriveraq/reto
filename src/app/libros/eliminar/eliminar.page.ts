import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ApiLibrosService } from '../servicio/api-libros.service';
import {Libroconid} from './../modelo/libros'

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.page.html',
  styleUrls: ['./eliminar.page.scss'],
})
export class EliminarPage implements OnInit {
  public id: number = 0;
  public libro!: Libroconid;

  constructor(
    private ruta: ActivatedRoute,
    private router: Router,
    private apilibro: ApiLibrosService,
    private aler: AlertController
  ) { }

  ngOnInit() {
    this.ruta.paramMap.subscribe(parametros => {
      this.id = +parametros.get('idLibros')
      this.apilibro.llibroid(this.id).subscribe(datos => {
        if (datos){
          this.libro = datos;
        } else {
          this.router.navigate([''])
        }
      })
    })
  }

  public async eliminar(){
    const mensaje = await this.aler.create({
      header: 'Quieres borrar',
      buttons: [
        {
          text: 'No',
          role: 'cancel'
        },
        {
          text: 'Si',
          role: 'confirm',
          handler: () =>{
            this.apilibro.elibro(this.id).subscribe(()=>{
              this.router.navigate(['']);
            })
          }
        }
      ]
    });
    await mensaje.present();
  }
}
