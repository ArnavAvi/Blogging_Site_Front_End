import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {UserDetails} from '../../../UserDetails';
import {Postreference} from '../../Postreference';

@Injectable({
  providedIn: 'root'
})
export class InteractionServiceService {
  submittedDetails: Postreference;
  constructor() { }

  setSubmit(post: Postreference) {
    this.submittedDetails = post;
  }
}
