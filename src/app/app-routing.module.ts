import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponent }      from './questions/questions.component';
import { CategoriesComponent }   from './categories/categories.component';
import { QuestionDetailComponent }  from './question-detail/question-detail.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: '/categories', pathMatch: 'full' },
  { path: 'questions', component: QuestionsComponent },
  { path: 'add-question', component: AddQuestionComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'detail/:id', component: QuestionDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {}
