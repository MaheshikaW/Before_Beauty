import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import {HttpModule} from '@angular/http';
import { SearchComponent } from './components/search/search.component';
import {SearchService} from './services/search.service';
import { ProfileComponent } from './components/profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimarysearchComponent } from './components/primarysearch/primarysearch.component';

import { FullCalendarModule } from 'ng-fullcalendar';
 



const appRoutes:Routes = [
  
  {path:'',component:HomeComponent},
  {path:'search',component:SearchComponent},
  {path:'profile',component:ProfileComponent},
  {path:'profile/:id',component:ProfileComponent},
  {path:'primarysearch/:skill',component:PrimarysearchComponent},

 

  
   
  ]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    FooterComponent,
    ProfileComponent,
    PrimarysearchComponent,


  

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FullCalendarModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
