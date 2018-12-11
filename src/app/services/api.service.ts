import { Injectable } from '@angular/core';
import { Info } from '../Model/Info';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  products: any;
  constructor(private http: HttpClient) {
    this.getJson();
  }

  getJson(): Observable<any> {
    return this.http.get('../../assets/mock.json')
      .pipe(
        map(
          data =>
            data as any
          )
      );
  }
}
