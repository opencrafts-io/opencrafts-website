import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Policy } from './pages/policy';

const routes: Routes = [
  {
    path: '',
    component: Policy
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]                                                    
})
export class PolicyRoutingModule { }
