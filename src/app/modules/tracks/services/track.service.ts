import { Injectable, inject } from '@angular/core';
import { catchError, map, mergeMap, Observable, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TrackModel } from '@core/models/tracks.module';

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

  private skipById(listTracks: TrackModel[], id: number): Promise<TrackModel[]> {
    return new Promise((resolve, reject) => {
      const listTmp = listTracks.filter(a => a._id != id)
      resolve(listTmp)
    })
  }

  getAllTracks$(): Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`).pipe(
      map((dataRaw: any) => {
        return dataRaw.data
      })
    )
  }
  getAllRandom$(): Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`).pipe(
      //Extraer data con filtro y promesa
      mergeMap(({ data }: any) => this.skipById(data, 1)),
      //Extraer data sin promesa
      /* map(({data}:any)=>{
        return data.reverse()
      }), */
      /* map((dataRevertida)=> {
        return dataRevertida.filter((track:TrackModel)=> track._id != 1)
      } ) */ //FILTRO PARA EVITAR QUE APARESTA EL TRACK DE ID 1
      //hacer un consolelog
      tap(data => console.log('↓↓↓', data)),
      catchError((err)=>{
        const {status,statusText}= err
        console.log("Algo paso Revisame",[err.status,err.statusText]);
        
        return of([])
      })
    )
  }
}
