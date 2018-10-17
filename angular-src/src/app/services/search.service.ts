import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: Http) {
  }

  //getting all hairstylists
  getAllUsers() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/users/allusers', { headers: headers })
      .pipe(map(res => res.json()));
  }
  //geting profile details from id
  getProfile(id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/profile/' + id, { headers: headers })
      .pipe(map(res => res.json()));
  }
  //getting all skills
  getAllSkills() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/users/allskills', { headers: headers })
      .pipe(map(res => res.json()));
  }
  //geting hairstylists from skill 
  getUsersBySkill(skill) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/usersbyskill/' + skill, { headers: headers })
      .pipe(map(res => res.json()));
  }
  //getting all locations
  getLocations() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/users/alllocations', { headers: headers })
      .pipe(map(res => res.json()));
  }

  //getiing hairstylists by location
  getUsersByLocation(location) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/usersbyskill/' + location, { headers: headers })
      .pipe(map(res => res.json()));
  }
  //getting hairstylist for advanced search
  getFilteredUsers(searchParameters) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/usersbyfilters', searchParameters, { headers: headers })
      .pipe(map(res => res.json()));
  }
}

