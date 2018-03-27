import { Injectable } from '@angular/core';
import { Question } from '../question';
import { QUESTIONS } from '../mock-questions';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class QuestionService {

  constructor() { }

  getQuestions(): Observable<Question[]> {
    return of(QUESTIONS);
  }

  getQuestion(id: number): Observable<Question> {
    // Todo: send the message _after_ fetching the hero
    // this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(QUESTIONS.find(question => question.id === id));
  }

}
