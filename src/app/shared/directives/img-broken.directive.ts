import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]',
  standalone: true
})
export class ImgBrokenDirective {
  //Inpu cuando se solicita un string
  @Input() customImg: string = '';
  @HostListener('error') handleError():void {
    const elNative = this.elHost.nativeElement
    //console.log('Imagen no cargo --------->', elNative);
    elNative.src= this.customImg;
    //cuando se carga la img desde assets
    // '../../../assets/images/no-carga.jpg'
    
  }
  //Host

  constructor(private elHost:ElementRef) { 
    console.log(this.elHost);
    
  }

}
