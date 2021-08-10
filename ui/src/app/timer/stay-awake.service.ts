import {Injectable} from '@angular/core';
import NoSleep from "nosleep.js";

@Injectable({
  providedIn: 'root'
})
export class StayAwakeService {

  private readonly noSleep = new NoSleep();

  stayAwake(): void {
    if (!this.noSleep.isEnabled) {
      this.noSleep.enable();
    }
  }

  allowSleep(): void {
    if (this.noSleep.isEnabled) {
      this.noSleep.disable();
    }
  }

}


