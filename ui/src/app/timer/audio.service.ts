import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  private readonly letsGoAudio = new Audio('/assets/audio/514688__metrostock99__lets-go.ogg');

  constructor() { }

  letsGo() {
    this.letsGoAudio.play().catch(_ => console.error("Sound effect 'lets go' was blocked by the browser."));
  }
}
