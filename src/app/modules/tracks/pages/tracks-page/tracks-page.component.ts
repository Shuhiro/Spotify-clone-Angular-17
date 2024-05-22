import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import * as dataRaw from '../../../../data/tracks.json';
import { TrackModel } from '@core/models/tracks.module';

@Component({
  selector: 'app-tracks-page',
  standalone: true,
  imports: [SharedModule,CommonModule],
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css'
})
export class TracksPageComponent implements OnInit {

  mockTrackList:Array<TrackModel> = [
  ]

  ngOnInit(): void {
    const {data}:any = (dataRaw as any).default;
    this.mockTrackList = data;
  }
}
