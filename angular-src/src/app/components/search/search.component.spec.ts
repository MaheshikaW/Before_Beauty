import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { SearchComponent } from './search.component';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import { SearchService } from '../../services/search.service';
import { DOCUMENT } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';


describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

 
  it('should have a a tag of `+ More options`', () => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    expect(debugElement.query(By.css('a')).nativeElement.innerText).toBe('+ More options');
    });
});



