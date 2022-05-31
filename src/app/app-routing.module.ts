import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IframeAppComponent } from './components/iframe-app/iframe-app.component';
import { Subcomponent1Component } from './components/subcomponent1/subcomponent1.component';

const routes: Routes = [
  {
    path: 'subcomponent1',
    component: Subcomponent1Component,
  },
  {
    path: 'iframe',
    component: IframeAppComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
