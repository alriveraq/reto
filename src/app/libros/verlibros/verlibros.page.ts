import { Component, OnInit, ViewChild} from '@angular/core';
import { Libroconid } from '../modelo/libros';
import {ApiLibrosService} from './../servicio/api-libros.service';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-verlibros',
  templateUrl: './verlibros.page.html',
  styleUrls: ['./verlibros.page.scss'],
})
export class VerlibrosPage implements OnInit {
  @ViewChild(IonInfiniteScroll)
  public scroll: IonInfiniteScroll;
  public libros: Array<Libroconid> = [];
  constructor(
    private apilibros: ApiLibrosService,
  ) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.apilibros.llibro()
    this.apilibros.listalibro$.subscribe(datosac => {
      this.libros = datosac;
      if(this.scroll){
        this.scroll.complete();
    }})
  }

  public cargarMElem(){
    this.apilibros.cargarMElem();
  }
}
