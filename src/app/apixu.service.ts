import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) {}

  getWeather(location:any){

      return this.http.get(
          'http://api.weatherstack.com/current?access_key=bd4bbb6dff855d307402dada14b81bc9&query=' + location
      );
  }
}
