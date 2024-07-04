import { Component, Input } from '@angular/core';
import { Track } from '../../models/track';
import { TrackService } from '../../services/old-services/track.service';
import { ListItem } from '../../models/listItem';

@Component({
  selector: 'app-top-ten-songs',
  standalone: true,
  imports: [],

  templateUrl: './top-ten-songs.component.html',
  styleUrl: './top-ten-songs.component.css'
})
export class TopTenSongsComponent{


  @Input() tracks: ListItem[] = [];
  @Input() label: string = '';


  constructor(private trackService: TrackService) { }


  // Pass the track values to the player component
  callPlaySong(track: ListItem){
    /* this.trackService.playSong(track); */
  }

  // Convert the duration value from ms to minutes and return the value as a string 
  formatDuration(durationMs: number): string {

  const minutes = Math.floor(durationMs / 60000);
  const seconds = Math.floor((durationMs % 60000) / 1000);
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
}


