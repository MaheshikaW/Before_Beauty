import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: Http) { }
  ValidateSearch(Skill){
    if (Skill == undefined) {
      return false;
    }
    else {
      return true;
    }
  }

  getAllUsers() {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/users/allusers', { headers: headers })
      .pipe(map(res => res.json()));
  }

  getProfile(id) {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/profile/' + id, { headers: headers })
      .pipe(map(res => res.json()));

  }
  getAllSkills() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/users/allskills', { headers: headers })
      .pipe(map(res => res.json()));
  }
  getUsersBySkill(skill) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/usersbyskill/' + skill, { headers: headers })
      .pipe(map(res => res.json()));
  }
 getLocations(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/users/alllocations', { headers: headers })
      .pipe(map(res => res.json()));
  }
  getPrices(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/users/allprices', { headers: headers })
      .pipe(map(res => res.json()));
  }
  getAllRates(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/users/allrates', { headers: headers })
      .pipe(map(res => res.json()));
  }
  getUsersByLocation(location) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/usersbyskill/' + location, { headers: headers })
      .pipe(map(res => res.json()));
  }
  getFilteredUsers(skill,rate,price,location){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/usersbyfilters/' +skill+location+rate+price,{ headers: headers })
      .pipe(map(res => res.json()));
  }

}

