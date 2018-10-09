import { Component, OnInit } from '@angular/core';
import {SearchService} from '../../services/search.service';
import { Router,ActivatedRoute,Params } from '@angular/router'; 

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id:string;
  userlist=[];
  

  constructor(private SearchServie:SearchService,private router:Router, private route: ActivatedRoute) {
    
   }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      //console.log(this.id);
    });
    this.SearchServie.getProfile(this.id).subscribe(profile=>{
    this.userlist = profile.userlist;
      console.log(this.id);
    },
      err => {
        console.log(err);
        return false;
  
    });
    
  }

}
