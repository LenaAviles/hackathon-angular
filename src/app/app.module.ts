import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimengModule } from './primeng.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

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
    PrimengModule,
    ReactiveFormsModule, 
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,       
  ],
  providers: [QuestionService, CategoryService, DoctorService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
