import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../question';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { QuestionService }  from '../services/question.service';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.scss']
})
export class QuestionDetailComponent implements OnInit {
  @Input() question: Question;

  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getQuestion();
  }
  
  getQuestion(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.questionService.getQuestion(id)
      .subscribe(question => this.question = question);
  }

  goBack(): void {
    this.location.back();
  }

}
