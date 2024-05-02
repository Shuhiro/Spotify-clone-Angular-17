import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent implements OnInit {

  mockCover:any = {
    cover:'',
    album:'Gioli & Assia',
    name:'BEBE (OFICIAL)'
  }

  ngOnInit(): void {
  }
}
