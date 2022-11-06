import { Injectable } from '@angular/core';
import {LibroParcial, Libroconid, Libros} from './../modelo/libros';
import {HttpClient} from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiLibrosService {
  private url = 'http://localhost:3000/libros'
  private pag = 1;
  private lista = new BehaviorSubject<Array<Libroconid>>([]);
  public listalibro$ = this.lista.asObservable();
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

  public llibroid  (id: number): Observable<Libroconid | null>{
    return this.httpclient.get<Libroconid | null>(`${this.url}/${id}`);
  }
}
