import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { TrackModel } from '@core/models/tracks.module';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  
  mockCover:TrackModel = {
    cover:'https://i.scdn.co/image/ab67616d0000b27345ca41b0d2352242c7c9d4bc',
    album:'Gioli & Assia',
    name:'BEBE (OFICIAL)',
    url:'http://localhost/track.mp3',
    _id: 1
  }
  
  private multimediaService = inject(MultimediaService);
  
  listObservers$: Array<Subscription>=[];

  ngOnInit(): void {
    const observer1$:Subscription = this.multimediaService.callback.subscribe(
      (response:TrackModel)=> {
        console.log('recibiendo cancion....',response);
        
      } 
    );

    this.listObservers$ = [observer1$]
  }
  
  ngOnDestroy(): void {
    this.listObservers$.forEach(u=>u.unsubscribe());
    console.log('boom');
    
  }

}
