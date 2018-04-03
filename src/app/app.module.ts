import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { SharedModule } from './shared/shared.module';

import { QuestionService } from './services/question.service';
import { CategoryService } from './services/category.service';
import { DoctorService } from './services/doctor.service';
import { AuthService } from './auth/auth.service';

import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { CategoriesComponent } from './categories/categories.component';
import { AddQuestionComponent } from './add-question/add-question.component';

import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    QuestionDetailComponent,
    CategoriesComponent,
    AddQuestionComponent,   
    LoginComponent,
    SignupComponent,      
  ],
  imports: [
    BrowserModule,    
    AppRoutingModule,    
    BrowserAnimationsModule,    
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,     
    SharedModule   
  ],
  providers: [QuestionService, CategoryService, DoctorService, AuthService],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
