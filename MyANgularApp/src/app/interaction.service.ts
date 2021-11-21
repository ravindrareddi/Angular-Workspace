import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  constructor() { }
    private subject = new Subject();
    interactionmessage$ = this.subject.asObservable();

    sendMessage(message: string) {
        this.subject.next(message);
    }
 
    getMessage(){
        return this.subject.asObservable();
    }
}
