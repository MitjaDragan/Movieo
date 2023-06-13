import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  dataEmitter: EventEmitter<any> = new EventEmitter();

  constructor() { }
}
