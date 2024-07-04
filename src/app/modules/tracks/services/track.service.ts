import { Injectable, inject } from '@angular/core';
import { TrackModel } from '@core/models/tracks.module';
import { Observable, of } from 'rxjs';
import * as dataRaw from '../../../data/tracks.json'
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  /* dataTracksTrending$: Observable<TrackModel[]> = of([]);
  dataTracksRandom$: Observable<any> = of([]); */

  private readonly URL = environment.api;
  private httpClient = inject(HttpClient);

  constructor() {
    /* const {data}:any = (dataRaw as any).default;
    this.dataTracksTrending$ = of(data)
    this.dataTracksRandom$ = new Observable((observer) =>{

      const trackExample:TrackModel = {
        _id: 9,
        name: 'leve',
        album: 'Cartel del Santa',
        url:'',
        cover:''
      }

      setTimeout(() => {
        observer.next([trackExample])
      }, 3500);
    })*/
  } 

  getAllTracks$():Observable<any>{
    return this.httpClient.get(`${this.URL}/tracks`)
  }
}
