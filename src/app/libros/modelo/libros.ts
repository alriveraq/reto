export interface Libros {
  nombre: string;
  descripcion: string;
  paginas: number;
  autor: string;
  idioma: string;
  ano: number;
  editorial: string;
  dimensiones: string;
  imagen: string;
}

export interface Libroconid extends Libros{
  id: number;
}

export interface LibroParcial extends Partial<Libros>{}
