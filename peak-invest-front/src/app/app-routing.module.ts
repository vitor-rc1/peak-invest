import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import { CalculateComponent } from './calculate/calculate.component';

const routes: Routes = [
  { path: 'user', component: UserComponent},
  { path: 'calculate', component: CalculateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
