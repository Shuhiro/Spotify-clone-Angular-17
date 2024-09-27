import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
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
  
  @Input() tracks:TrackModel[] = [];

  optionSort:{property:string | null, order:string}={property: null , order:'asc'};
  
  ngOnInit(): void {
  }

  changeSort(property:string):void{
    const {order} = this.optionSort;
    this.optionSort = {
      property: property,
      order: order== 'asc' ? 'desc' : 'asc'
    }
  }

}
