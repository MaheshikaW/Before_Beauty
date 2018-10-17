import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { NgsnotifyService } from '../../services/ngsnotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  userlist = [];
  skilllist = [];
  locationlist = [];
  skill: string;
  searchTerm: string;
  name: string;
  Show: boolean = false;
  rate: String;
  price: String;
  location: String;

  //initialize services
  constructor(private router: Router, private ngsnotifyService: NgsnotifyService, private SearchService: SearchService, ) {
  }

  ngOnInit() {

    //show all stylist 
    this.showAllStylists();
    //get all skills to the dropdownlist
    this.getAllSkills();
    //get all locations to the dropdownlist
    this.getAllLocations();
  }

  onShowProfile(id) {
    this.router.navigate(['profile/' + id]);
  }

  showAllStylists() {
    this.SearchService.getAllUsers().subscribe(dashboard => {
      this.userlist = dashboard.userlist;
    },
      err => {
        console.log(err);
        return false;

      });
  }

  getAllSkills() {
    this.SearchService.getAllSkills().subscribe(dashboard => {
      this.skilllist = dashboard.skilllist;

    },
      err => {
        console.log(err);
        return false;

      });
  }

  getAllLocations(){
    this.SearchService.getLocations().subscribe(dashboard => {
      this.locationlist = dashboard.locationlist;
    },
      err => {
        console.log(err);
        return false;

      });
  }

 //hiding and showing dropdownlist
  toggleDropDown() {
    this.Show = !this.Show;
  }

  //primary search
  search() {
    const skill = this.skill;

    if (!skill) {
      this.ngsnotifyService.onWarning('Please select a specialized area', 'Warning');
    }
    else {
      this.userlist = [];
      this.SearchService.getUsersBySkill(skill).subscribe(primarysearch => {
        this.userlist = primarysearch.userlist;
        if (this.userlist.length == 0) {
          this.ngsnotifyService.onInfo('Stylists are not found', 'Sorry :(');
        }
        else {
          this.ngsnotifyService.onSuccess('Stylists are found', 'Success');
        }

      },
        err => {
          console.log(err);
          return false;

        });
    }
  }
  //advanced search
  advancedSearch() {

    const searchParameters = {
      skill: this.skill,
      location: this.location,
      price: this.price,
      rate: this.rate
    }
    //validation for empty input fields
    if ((!this.location) && (!this.price) && (!this.rate)) {
      this.ngsnotifyService.onInfo('Please select atleast one option for customize search', 'Info');
    }
    else {
      this.SearchService.getFilteredUsers(searchParameters).subscribe(primarysearch => {
        this.userlist = primarysearch.userlist;
        if (this.userlist.length == 0) {
          this.ngsnotifyService.onInfo('Stylists are not found', 'Sorry :(');
          this.showAllStylists();
        }
        else {
          this.ngsnotifyService.onSuccess('Stylists are found', 'success:)');
        }
      },
        err => {
          console.log(err);
          return false;

        });
    }
  }
}
