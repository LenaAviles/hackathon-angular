import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { QuestionService } from '../services/question.service';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  questions: Question[];    

  constructor(private questionService: QuestionService,
              private categoryService: CategoryService) { }

  ngOnInit() {
    this.getQuestions();
    this.getCategories();
  }

  getQuestions(): void {
    this.questionService.getQuestions()
        .subscribe(questions => this.questions = questions);
  }

  getCategories(): void {
    this.questions.forEach(item => item.category = this.categoryService.getCategoryById(item.category).name);    
  }

}
