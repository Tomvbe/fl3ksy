import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  private readonly letsGoAudio = new Audio('./assets/audio/514688__metrostock99__lets-go.ogg');
  private readonly finishedAudio = new Audio('./assets/audio/122255__jivatma07__level-complete.ogg');

  constructor() { }

  letsGo() {
    this.letsGoAudio.play().catch(_ => console.error("Sound effect 'lets go' was blocked by the browser."));
  }

  finished() {
    this.finishedAudio.play().catch(_ => console.error("Sound effect 'finished' was blocked by the browser."));
  }
}
