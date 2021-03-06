import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './components/user/user.component';
import { CalculateComponent } from './components/calculate/calculate.component';

const routes: Routes = [
  { path: 'user', component: UserComponent},
  { path: 'calculate', component: CalculateComponent},
  { path: '', redirectTo: '/user', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
