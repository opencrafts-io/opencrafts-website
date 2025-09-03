import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolicyRoutingModule } from './policy-routing-module';
import { Policy } from './pages/policy';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PolicyRoutingModule,
    Policy,
  ]
})
export class PolicyModule { }
