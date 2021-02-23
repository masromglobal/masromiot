import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'adminlogin',
    pathMatch: 'full'
  },
{
    path: 'admincompanylist',
    loadChildren: () => import('./components/admincompanylist/admincompanylist.module').then( m => m.AdmincompanylistPageModule)
  },
  {
    path: 'bucketlist',
    loadChildren: () => import('./components/bucketlist/bucketlist.module').then( m => m.BucketlistPageModule)
  },
  {
    path: 'adddata',
    loadChildren: () => import('./components/adddata/adddata.module').then( m => m.AdddataPageModule)
  },
  {
    path: 'adminlogin',
    loadChildren: () => import('./adminlogin/adminlogin.module').then( m => m.AdminloginPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
