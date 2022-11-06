import { Component} from '@angular/core';
import {ApiLibrosService} from './../servicio/api-libros.service';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {Libros} from './../modelo/libros'
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage{
  public formu: FormGroup;
  public imgcargando = false;
  public img64 = '';
  constructor(
    private frombuilder: FormBuilder,
    private apilibros: ApiLibrosService,
    private router: Router
  ) {
    this.formu = this.frombuilder.group({
      nombre: ['',[Validators.required, Validators.minLength(5),Validators.maxLength(50)]],
      descripcion: ['',[Validators.required, Validators.minLength(10),Validators.maxLength(250)]],
      paginas: [0,[]],
      autor: ['',[Validators.required, Validators.minLength(5),Validators.maxLength(50)]],
      idioma: ['',[Validators.required, Validators.minLength(3),Validators.maxLength(15)]],
      ano: [0,[]],
      editorial: ['',[Validators.required, Validators.minLength(5),Validators.maxLength(50)]],
      dimensiones: ['',[]],
      imagen: ['',[Validators.required]],
    })
  }
  public label(control: string){
    return this.formu.get(control);
  }
  public dirty(control: string){
    return this.formu.get(control).dirty;
  }



  public cfoto(evento: Event){
    this.imgcargando = true;
    const elemtno = evento.target as HTMLInputElement;
    const img = elemtno.files[0];
    console.log(img);
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onload = () => {
      this.imgcargando = false;
      console.log('Carga terminada');
      this.img64 = reader.result as string;
    }
  }
  public gimg(): void {
    if(this.formu.invalid || this.imgcargando){
      this.formu.markAllAsTouched();
      return;
    }
    this.apilibros.alibro({
      ...this.formu.value,imagen: this.img64
    })
    .subscribe(resultado => {
      if(resultado){
        this.formu.reset();
        this.formu.updateValueAndValidity();
        alert('imagen guardada');
        this.router.navigate(['']);
      }
    })
  }
}
