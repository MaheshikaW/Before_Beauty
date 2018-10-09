import { Component, OnInit } from '@angular/core';
import {SearchService} from '../../services/search.service';
import { Router,ActivatedRoute,Params } from '@angular/router'; 

@Component({
  selector: 'app-primarysearch',
  templateUrl: './primarysearch.component.html',
  styleUrls: ['./primarysearch.component.css']
})
export class PrimarysearchComponent implements OnInit {
  skill:string;
  userlist=[];

  constructor(  private router:Router,
    private SearchService:SearchService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.skill = params['skill'];
      
    });

    this.SearchService.getUsersBySkill(this.skill).subscribe(primarysearch=>{
      this.userlist = primarysearch.userlist;
     
      },
        err => {
          console.log(err);
          return false;
    
      });

    
  }
  Search(){
    const skill = this.skill;
    this.router.navigate(['primarysearch/'+skill]);
   }

}
