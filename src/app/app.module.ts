import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA  } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
// import { PrimengModule } from './primeng.module';
import { FieldsetModule } from 'primeng/fieldset';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FileUploadModule } from 'primeng/fileupload';
import { SidebarModule } from 'primeng/sidebar';
import { PanelModule } from 'primeng/panel';
import { MenubarModule } from 'primeng/menubar';
import { CalendarModule } from 'primeng/calendar';

import { QuestionService } from './services/question.service';
import { CategoryService } from './services/category.service';
import { DoctorService } from './services/doctor.service';
import { AuthService } from './auth/auth.service';

import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { CategoriesComponent } from './categories/categories.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HeaderComponent } from './shared/navigation/header/header.component';

import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    QuestionDetailComponent,
    CategoriesComponent,
    AddQuestionComponent,
    MenuComponent,
    LoginComponent,
    SignupComponent, 
    HeaderComponent,     
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,    
    BrowserAnimationsModule,    
    ReactiveFormsModule, 
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,  
    // PrimengModule,
    FieldsetModule,
    CheckboxModule,
    InputTextareaModule,
    DropdownModule,
    InputTextModule,
    RadioButtonModule,
    FileUploadModule,
    SidebarModule,
    MenubarModule,
    PanelModule, 
    CalendarModule,  
  ],
  providers: [QuestionService, CategoryService, DoctorService, AuthService],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
