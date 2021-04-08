import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ShaService {

  _url='';

  constructor( private _htpp: HttpClient) { }

  enroll(user: User){
    return this._htpp.post<any>(this._url, user)
  }
}
