import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./libros/verlibros/verlibros.module').then( m => m.VerlibrosPageModule)
  },
  {
    path: 'agregar',
    loadChildren: () => import('./libros/agregar/agregar.module').then(m => m.AgregarPageModule)
  },
  {
    path: 'eliminar/:idLibros',
    loadChildren: () => import('./libros/eliminar/eliminar.module').then( m => m.EliminarPageModule)
  },
  {
    path: 'libro/:idLibros',
    loadChildren: () => import('./libros/libro/libro.module').then( m => m.LibroPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
