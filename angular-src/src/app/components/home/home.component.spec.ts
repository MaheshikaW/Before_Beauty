import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { HomeComponent } from './home.component';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import { SearchService } from '../../services/search.service';
import { DOCUMENT } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';


describe('SearchComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let debugElement: DebugElement;
  let htmlElement :HTMLElement;

  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [RouterTestingModule],
      

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
    it('should render title in a h1 tag', async(() => {
      let fixture = TestBed.createComponent(HomeComponent);
      fixture.detectChanges();
      let compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h2').textContent).toContain('Looking to hire faster and more affordably?');
    }));

   
  

  

});

