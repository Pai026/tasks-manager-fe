import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {
    path:'',
    redirectTo : '/login',
    pathMatch: 'full'
  },
  {
    path:"todo",
    component : TodoComponent,
    canActivate: [AuthGuard]
  },
  {
    path:"login",
    component : LoginComponent
  },
  {
    path:"register",
    component : RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routeModules = [
  LoginComponent,
  RegisterComponent,
  TodoComponent
]
