import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { NotesComponent } from './components/notes/notes.component';
import { GetnotesComponent } from './components/getnotes/getnotes.component';
import { ArchieveComponent } from './components/archieve/archieve.component';
import { TrashnotesComponent } from './components/trashnotes/trashnotes.component';

const routes: Routes = [
  {path : '',component:LoginComponent},
  {path : 'login',component :LoginComponent},
  {path : 'register',component:RegisterComponent},
  {path : 'forgotpassword',component : ForgotpasswordComponent},
  {path : 'dashboard',component : DashboardComponent},
  {path : 'resetpassword/:token',component : ResetpasswordComponent},
  { path: "dashboard",component: DashboardComponent,
  children: [
    { path: "", redirectTo: "/dashboard/notes", pathMatch: "full" },
    { path: "notes", component:NotesComponent},
    {path : "getallnotes/:token",component:GetnotesComponent},
    {path : "archievenotes",component : ArchieveComponent},
    {path : "trashnotes",component : TrashnotesComponent}
  ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
