import { Component, inject } from '@angular/core';
import { SearchComponent } from "../../components/search/search.component";
import { SharedModule } from "../../../../shared/shared.module";
import { SearchService } from '@modules/history/services/search.service';
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-history-page',
  standalone: true,
  imports: [SearchComponent, SharedModule,CommonModule],
  templateUrl: './history-page.component.html',
  styleUrl: './history-page.component.css'
})
export class HistoryPageComponent {

  listResults$:Observable<any> = of([]);
  private searchService = inject(SearchService);

  receiveData(event: string):void {
    //console.log('Estoy en el padre..',event);
    this.listResults$ = this.searchService.searchTracks$(event)
    console.log(this.listResults$);
    
  }
}
