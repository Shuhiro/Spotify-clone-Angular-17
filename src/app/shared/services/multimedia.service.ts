import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  callback:EventEmitter<any> = new EventEmitter<any>;

  //Subject
  //myObservable1$: Subject<any> = new Subject();
  
  myObservable1$: BehaviorSubject<any> = new BehaviorSubject('***');

  //Observable y Observer
  /* myObservable1$:Observable<any> = new Observable(
    (observer:Observer<any>)=>{
      observer.next('****')
      
      setTimeout(()=>{observer.complete()},1000)
      
      setTimeout(()=>{observer.next('----')},2500)

      setTimeout(()=>{observer.error('.-.-.-.-.-')},3500)
    }
  ); */

  constructor() {

    //Para => myObservable1$: Subject<any> = new Subject();
    /* setTimeout(()=>{
    this.myObservable1$.next('*1*')
    },1000); */
    //this.myObservable1$.next('***')


    setTimeout(()=>{
    this.myObservable1$.next('*1*')
    },1000);
  }
}
