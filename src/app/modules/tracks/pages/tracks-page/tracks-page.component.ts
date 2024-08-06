import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { SharedModule } from '@shared/shared.module';/* 
import * as dataRaw from '../../../../data/tracks.json'; */
import { TrackModel } from '@core/models/tracks.module';
import { TrackService } from '@modules/tracks/services/track.service';
import { firstValueFrom, Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  standalone: true,
  imports: [SharedModule, CommonModule],
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css'
})
export class TracksPageComponent implements OnInit {

  tracksTrending: Array<TrackModel> = [];
  tracksRandom: Array<TrackModel> = [];

  listObserver$: Array<Subscription> = [];

  private trackService = inject(TrackService);

  ngOnInit(): void {
    this.loadDataAll()
    this.loadDataRandom()
    //cuando se llama con http no es necesario desusbscribir
    /* this.trackService.getAllTracks$().subscribe(res =>{
      this.tracksTrending=res;
    })
    this.trackService.getAllRandom$().subscribe(res =>{
      this.tracksRandom=res;
    }) */

    /* const observer1$= this.trackService.dataTracksTrending$.subscribe(response => {
      this.tracksTrending = response;
      this.tracksRandom = response;
      console.log('Canciones trending------>', response);
      
    }) */
    /* const observer2$= this.trackService.dataTracksRandom$.subscribe(response => {
      this.tracksRandom = [... this.tracksRandom,... response];
      console.log('Canciones Random entrando------>', response);
      
    }) */

    /*  this.listObserver$ = [observer1$]; */

  }

  async loadDataAll(): Promise<any> {
    this.tracksTrending = await firstValueFrom(this.trackService.getAllTracks$())
  }

  loadDataRandom(): void {
    firstValueFrom(this.trackService.getAllRandom$())
    .then((res: TrackModel[]) => {
      this.tracksRandom = res;
    }).catch(err =>{console.log("error de conexion");})
  }
  /* ngOnDestroy(): void {
    this.listObserver$.forEach(u => u.unsubscribe());
  } */
}
