import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './components/register/register.component';
import {MatButtonModule,MatCheckboxModule,MatToolbarModule,MatInputModule,MatProgressSpinnerModule,MatCardModule,MatMenuModule, MatIconModule, MatTooltipModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
// import {FundoonoteserviceService} from './services/fundoonoteservice.service';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { MatSnackBarModule } from "@angular/material";
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import {NotesComponent} from './components/notes/notes.component';
import { ShownotesComponent } from './components/shownotes/shownotes.component';
import { GetnotesComponent } from './components/getnotes/getnotes.component';
import { UpdatenoteComponent } from './components/updatenote/updatenote.component';
import { ArchieveComponent } from './components/archieve/archieve.component';
import { IconsComponent } from './components/icons/icons.component';
import { UserService } from './services/user.service';
import { NoteService } from './services/note.service';
import {MatDialogModule} from '@angular/material/dialog';
import { TrashnotesComponent } from './components/trashnotes/trashnotes.component';
import {MatTooltip} from '@angular/material';
import { CreatelabelComponent } from './components/createlabel/createlabel.component';
import { ShowlabelComponent } from './components/showlabel/showlabel.component';
import { FlexLayoutModule } from "@angular/flex-layout";
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgotpasswordComponent,
    DashboardComponent,
    ResetpasswordComponent,
    NotesComponent,
    ShownotesComponent,
    GetnotesComponent,
    UpdatenoteComponent,
    ArchieveComponent,
    IconsComponent,
    ArchieveComponent,
    TrashnotesComponent,
    CreatelabelComponent,
    ShowlabelComponent
  ],
  entryComponents: [UpdatenoteComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,MatToolbarModule,MatInputModule,MatProgressSpinnerModule,MatCardModule,MatMenuModule,MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatSnackBarModule,
    LayoutModule,
    MatListModule,
    MatDialogModule,
    MatTooltipModule,
    FlexLayoutModule,
  ],
  providers: [UserService,NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
