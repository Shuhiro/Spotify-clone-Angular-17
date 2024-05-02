import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent implements OnInit{

  mainMenu:{
    defaultlOption:Array<any>,
    accessLink:Array<any>
  } = {defaultlOption: [], accessLink: []}

  customOptions:Array<any>=[];

  ngOnInit(): void {
    this.mainMenu.defaultlOption = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/']
      },
      {
        name: 'Buscar',
        icon: 'uil uil-search',
        router: ['/','history']
      },
      {
        name: 'Tu biblioteca',
        icon: 'uil uil-chart',
        router: ['/','favorities']
      }
    ]
    
    this.mainMenu.accessLink = [
      {
        name: 'Crear Lista',
        icon: 'uil-plus-square'
      },
      {
        name: 'Canciones que te gustan',
        icon: 'uil-heart-medical'
      }
    ]

    this.customOptions = [
      {
        name: 'Mi lista N° 1',
        router: ['/']
      },
      {
        name: 'Mi lista N° 2',
        router: ['/']
      },
      {
        name: 'Mi lista N° 3',
        router: ['/']
      },
      {
        name: 'Mi lista N° 4',
        router: ['/']
      }
    ]
  }

}
