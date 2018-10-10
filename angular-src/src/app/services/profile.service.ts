import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:Http) { }



  getPhotoGallery(id){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/profiles/getphotogallery/'+id,{headers:headers})
  .pipe(map(res => res.json()));
  }
}
