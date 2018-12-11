import { Injectable } from '@angular/core';
import { Info } from '../Model/Info';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  products: any;
  constructor(private apiService: ApiService) { }

  getInfo(): Observable<Info> {
    return this.apiService.getJson();
  }

}
