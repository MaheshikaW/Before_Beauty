import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  userlist = [];
  skilllist = [];
  skill: string;
  searchTerm: string;
  Name: String;
  name: string;
  Show: boolean = false;


  constructor(private router: Router,
    private SearchService: SearchService, ) { }

  ngOnInit() {


    this.SearchService.getAllUsers().subscribe(dashboard => {
      this.userlist = dashboard.userlist;

    },
      err => {
        console.log(err);
        return false;
      });



    this.SearchService.getAllSkills().subscribe(dashboard => {
      this.skilllist = dashboard.skilllist;

    },
      err => {
        console.log(err);
        return false;
      });
  }
  onShowProfile(id) {
    this.router.navigate(['profile/' + id]);

  }


  toggleDropDown() {
    this.Show = !this.Show;



  }
  Search() {
    const skill = this.skill;
    this.router.navigate(['primarysearch/' + skill]);
  }

}
