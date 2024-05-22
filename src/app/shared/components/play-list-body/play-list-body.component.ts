import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import * as dataRaw from '../../../data/tracks.json';
import { TrackModel } from '@core/models/tracks.module';
import { OrderListPipe } from "../../pipe/order-list.pipe";

@Component({
    selector: 'app-play-list-body',
    standalone: true,
    templateUrl: './play-list-body.component.html',
    styleUrl: './play-list-body.component.css',
    imports: [CommonModule, OrderListPipe]
})
export class PlayListBodyComponent implements OnInit{
  
  tracks:Array<TrackModel> = [];

  optionSort:{property:string | null, order:string}={property: null , order:'asc'};
  
  ngOnInit(): void {
    const {data}:any = (dataRaw as any).default;
    this.tracks= data;
  }

  changeSort(property:string):void{
    const {order} = this.optionSort;
    this.optionSort = {
      property: property,
      order: order== 'asc' ? 'desc' : 'asc'
    }
  }

}
