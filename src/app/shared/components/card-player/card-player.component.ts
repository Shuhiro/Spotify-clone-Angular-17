import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { TrackModel } from '@core/models/tracks.module';
import { ImgBrokenDirective } from '@shared/directives/img-broken.directive';
import { MultimediaService } from '@shared/services/multimedia.service';

@Component({
  selector: 'app-card-player',
  standalone: true,
  imports: [CommonModule, ImgBrokenDirective],
  templateUrl: './card-player.component.html',
  styleUrl: './card-player.component.css'
})
export class CardPlayerComponent {

  @Input() mode: 'small'| 'big' = 'small';

  @Input() track:TrackModel={_id:0,name:'',album:'',url:'',cover:''};

  private multimediaService = inject(MultimediaService);

  sendPlay(track:TrackModel):void{
    this.multimediaService.callback.emit(track);
  }

}
