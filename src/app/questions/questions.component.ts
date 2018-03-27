import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  questions: Question[];  

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions(): void {
    this.questionService.getQuestions()
        .subscribe(questions => this.questions = questions);
  }

}
