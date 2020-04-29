
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class viewToggleButton {
    buttonState:boolean = false;
    private viewButtton = new Subject<boolean>();
    constructor() { };
    updateButtonState(state) {
        this.buttonState = state;
        this.viewButtton.next(this.buttonState);
       console.log(this.buttonState);       
    }
    getButtonState() {
      this.buttonState = JSON.parse(localStorage.getItem("view"));
      this.viewButtton.next(this.buttonState);
      return this.viewButtton.asObservable();
    }

}