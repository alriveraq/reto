import { Component, OnInit } from '@angular/core';
import {ApiLibrosService} from './../servicio/api-libros.service';


@Component({
  selector: 'app-carro',
  templateUrl: './carro.page.html',
  styleUrls: ['./carro.page.scss'],
})
export class CarroPage implements OnInit {
  public libros : any = [];

  constructor(
    private apilibros: ApiLibrosService
  ) { }

  ngOnInit() {

  }

  ionViewWillEnter(){
    this.apilibros.librocarro().subscribe(res=> {
      this.libros =res;
    })

}
}
