import { Injectable } from '@angular/core';
import { Doctor } from '../doctor';
import { DOCTORS } from '../mock-doctors';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class DoctorService {

  constructor() { }

  getDoctors(): Observable<Doctor[]> {
    return of(DOCTORS);
  }

}
