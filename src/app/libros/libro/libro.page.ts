import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Libroconid } from '../modelo/libros';
import { ApiLibrosService } from '../servicio/api-libros.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.page.html',
  styleUrls: ['./libro.page.scss'],
})
export class LibroPage implements OnInit {

  public id: number = 0;
  public libro!: Libroconid;

  constructor(
    private ruta: ActivatedRoute,
    private router: Router,
    private apilibro: ApiLibrosService
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
  acarro(libro: any){
    this.apilibro.acarrito(libro)
  }
}
