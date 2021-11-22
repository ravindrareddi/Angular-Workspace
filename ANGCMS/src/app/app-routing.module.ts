import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { LoginsucessComponent } from './loginsucess/loginsucess.component';

const routes: Routes = [{ path: '', pathMatch: 'full',redirectTo: 'login' },
{ path: 'login', component: LoginComponent },
{ path: 'loginsucess', component: LoginsucessComponent }
           ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,LoginsucessComponent]
