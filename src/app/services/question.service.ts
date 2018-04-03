import { Injectable } from '@angular/core';
import { Question } from '../question';
import { QUESTIONS } from '../mock-questions';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class QuestionService {

  constructor(private db: AngularFirestore,
              private authService: AuthService) { }

  getQuestions(): Observable<Question[]> {
    return of(QUESTIONS);
  }

  getQuestion(id: number): Observable<Question> {
    
    return of(QUESTIONS.find(question => question.id === id));
  }

  addDataToDatabase(question) {
    question.user = this.authService.getUser().displayName;
    question.id = this.db.createId();   
    
    this.db.collection('Questions').add(question);
  }

}
