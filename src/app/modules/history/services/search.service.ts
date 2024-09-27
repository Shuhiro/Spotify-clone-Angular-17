import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private readonly URL = environment.api;
  private http = inject(HttpClient);

  constructor() { };

  searchTracks$(term: string):Observable<any>{
    return this.http.get(`${this.URL}/tracks?src=${term}`).pipe(
      map((dataRaw: any) => dataRaw.data)
    )
  }
}
