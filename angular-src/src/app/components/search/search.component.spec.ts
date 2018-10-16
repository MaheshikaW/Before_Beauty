import { async, ComponentFixture, TestBed ,inject} from '@angular/core/testing';
import { Router } from '@angular/router';
import { SearchComponent } from './search.component';
import {BrowserModule, By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import { SearchService } from '../../services/search.service';
import { DOCUMENT } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { NgsnotifyService } from '../../services/ngsnotify.service';






describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let debugElement: DebugElement;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports: [RouterTestingModule,FormsModule,BrowserModule],
      providers: [NgsnotifyService,SearchService]
                 
      
    })
    .compileComponents();
  }));

  

 
 
  
});



