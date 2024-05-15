import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-tracks-page',
  standalone: true,
  imports: [SharedModule,CommonModule],
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css'
})
export class TracksPageComponent implements OnInit {

  mockTrackList = [
    {
      name: 'BEBE (Oficial)'
    },
    {
      name: 'BEBE (Oficial)'
    },
    {
      name: 'BEBE (Oficial)'
    }
  ]

  ngOnInit(): void {
  }
}
