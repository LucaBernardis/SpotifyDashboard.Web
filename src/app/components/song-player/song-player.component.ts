import { Component} from '@angular/core';
import { Track } from '../../models/track';
import { TrackService } from '../../services/old-services/track.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-song-player',
  standalone: true,
  imports: [],
  templateUrl: './song-player.component.html',
  styleUrl: './song-player.component.css'
})
export class SongPlayerComponent {

  played: Boolean = false;
  currentTrack: Track | null | undefined;
  subscription: Subscription | undefined;

  constructor(private trackService: TrackService) { }

  // Component usable only with spotify premium

  ngOnInit(): void {
    this.subscription = this.trackService.currentTrack$.subscribe((track) => {
      this.currentTrack = track;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  nextsong() {
    console.log("Next song");
    this.played = true
  }

  StartOrpause() {
    if (!this.played) {
      console.log("play");
      this.played = true;

    }
    else {
      console.log("pause");
      this.played = false;
    }
  }

  rewindSong() {
    console.log("Rewind song")
    this.played = true;
  }
}