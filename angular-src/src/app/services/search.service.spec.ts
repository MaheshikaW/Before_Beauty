import { TestBed } from '@angular/core/testing';
import { inject } from '@angular/core/testing';
import { SearchService} from './search.service';
import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { MockBackend } from '@angular/http/testing';
import { Http, Headers } from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';


describe('SearchService', () => {
  let searchService:SearchService;
  let httpClient:Http;
  let httpMock:HttpTestingController;

 beforeEach(() => {
   TestBed.configureTestingModule({
  imports:[HttpClientTestingModule],
  providers: [
    {provide: Http,SearchService, deps: [MockBackend]},
    
  ]

 });
searchService=TestBed.get(SearchService);
httpMock = TestBed.get(HttpTestingController);
httpClient= TestBed.get(HttpClient);
});

  
 
  });
