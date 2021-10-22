import { Injectable } from '@angular/core';
import {TimerAudio} from "./timer.audio";

@Injectable({
  providedIn: 'root'
})
export class MuteService implements TimerAudio{

  finished(): void {
  }

  letsGo(): void {
  }

  constructor() { }
}
