import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { ProfileService } from '../../services/profile.service';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  id: string;
  userlist = [];
  photolist = [];
  skilllist = [];


  constructor(private SearchServie: SearchService, private ProfileService: ProfileService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];//profile id of hairstylist
    });

    this.SearchServie.getProfile(this.id).subscribe(profile => {
      this.userlist = profile.userlist;
    },
      err => {
        console.log(err);
        return false;

      });

    //get photoes of hairstylist protfolio
    this.ProfileService.getPhotoGallery(this.id).subscribe(profile => {
      this.photolist = profile.photolist;

    },
      err => {
        console.log(err);
        return false;

      });
    //get skills of hairstylist
    this.ProfileService.getSkills(this.id).subscribe(profile => {
      this.skilllist = profile.skilllist;

    },
      err => {
        console.log(err);
        return false;

      });
  }
}
