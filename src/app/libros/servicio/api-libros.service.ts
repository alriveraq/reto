import { Injectable } from '@angular/core';
import {LibroParcial, Libroconid, Libros} from './../modelo/libros';
import {HttpClient} from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiLibrosService {
  private url = 'http://localhost:3000/libros'
  private pag = 1;
  private lista = new BehaviorSubject<Array<Libroconid>>([]);
  public productList = new BehaviorSubject<any>([]);
  public listalibro$ = this.lista.asObservable();
  private listacarro: any =  [];
  constructor(
    private httpclient: HttpClient
  ){ }
  public alibro(libro:Libros){ //agregar libro
    return this.httpclient.post(this.url,libro,{
      headers: {
        'Content-Type':'application/json;charset=utf-8'
      }
    })
  }
  public llibro(){ //ver libros
    this.httpclient.get<Array<Libroconid>>(`${this.url}`)
    .subscribe(datos => {
      this.pag = this.pag + 1;
      this.lista.next(datos)
    });
  }

  public elibro (id: number): Observable<any>{  //eliminar libros por id
    return this.httpclient.delete(`${this.url}/${id}`)
  }

  public llibroid  (id: number): Observable<Libroconid | null>{ //ver libros por id
    return this.httpclient.get<Libroconid | null>(`${this.url}/${id}`);
  }

  public mLibroid(id: number, payload: LibroParcial): Observable<any>{ //modificar
    return this.httpclient.patch(`${this.url}/${id}`, payload, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    })
  }

  cargarMElem(){
    this.httpclient.get<Array<Libroconid>>(`${this.url}?_page=${this.pag}`)
    .pipe(
      delay(3000)
    )
    .subscribe(datos => {
      if(datos){
        this.pag = this.pag + 1;
        this.productList.next(this.productList.getValue().concat(datos));
      }

    })
  }

  public librocarro (){
    return this.listacarro.asObservable
  }

  public acarrito (l : any){
    this.listacarro.push(l)
    this.lista.next(this.listacarro)
    console.log(this.listacarro)
  }
}
