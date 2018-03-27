import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { QuestionService } from './services/question.service';
import { AppRoutingModule } from './/app-routing.module';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryService } from './services/category.service';
import { AddQuestionComponent } from './add-question/add-question.component';
import { MenubarModule } from 'primeng/menubar';
import { MenuComponent } from './menu/menu.component'
import { PanelModule } from 'primeng/panel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FieldsetModule } from 'primeng/fieldset';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FileUploadModule } from 'primeng/fileupload';
import { SidebarModule } from 'primeng/sidebar';
import { DoctorService } from './services/doctor.service';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    QuestionDetailComponent,
    CategoriesComponent,
    AddQuestionComponent,
    MenuComponent,       
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MenubarModule,
    PanelModule,
    BrowserAnimationsModule,
    FieldsetModule,
    CheckboxModule,
    InputTextareaModule,
    DropdownModule,
    InputTextModule,
    RadioButtonModule,
    FileUploadModule,
    SidebarModule
  ],
  providers: [QuestionService, CategoryService, DoctorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
