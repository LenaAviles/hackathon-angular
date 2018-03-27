import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponent }      from './questions/questions.component';
import { CategoriesComponent }   from './categories/categories.component';
import { QuestionDetailComponent }  from './question-detail/question-detail.component';
import { AddQuestionComponent } from './add-question/add-question.component';

const routes: Routes = [
  { path: '', redirectTo: '/categories', pathMatch: 'full' },
  { path: 'questions', component: QuestionsComponent },
  { path: 'add-question', component: AddQuestionComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'detail/:id', component: QuestionDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {}
