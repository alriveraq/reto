import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Libroconid } from '../modelo/libros';
import {ApiLibrosService} from './../servicio/api-libros.service';

@Component({
  selector: 'app-verlibros',
  templateUrl: './verlibros.page.html',
  styleUrls: ['./verlibros.page.scss'],
})
export class VerlibrosPage implements OnInit {
  public libros: Array<Libroconid> = [];
  constructor(
    private apilibros: ApiLibrosService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.apilibros.llibro()
    this.apilibros.listalibro$.subscribe(datosac => {
      this.libros = datosac;
    })
  }
}
