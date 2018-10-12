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
  location:String;
  locationlist=[];
  pricelist=[];
  ratelist=[];
  rate:string;
  Show: boolean = false;
  price:string;


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

      this.SearchService.getLocations().subscribe(dashboard => {
        this.locationlist = dashboard.locationlist;
        
  
      },
        err => {
          console.log(err);
          return false;
        });
      
 
      this.SearchService.getAllRates().subscribe(dashboard => {
      this.ratelist = dashboard.ratelist;
                
          
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
   onShowProfile(id) {
    this.router.navigate(['profile/' + id]);

  }
  AdvancedSearch(){
   
   console.log(this.rate);
   console.log(this.price);
   console.log(this.skill);
   console.log(this.location);


  }
  toggleDropDown() {
    this.Show = !this.Show;



  }

}
