import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopGuard } from "../../guards/shop-guard";
import { LoginComponent} from "../login/login.component";
import { RegisterComponent} from "../register/register.component";

import { AdminRoutingModule } from './admin.routing.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
  LoginComponent,
  RegisterComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ShopGuard
  ],
})
export class AdminModule { }
