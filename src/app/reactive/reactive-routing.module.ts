import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasiscosComponent } from './basiscos/basiscos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { SwitchesComponent } from './switches/switches.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'basicos', component: BasiscosComponent },
      { path: 'dinamicos', component: DinamicosComponent },
      { path: 'switches', component: SwitchesComponent },
      { path: '**', redirectTo:  'basicos'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ReactiveRoutingModule { }