import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }

  fetchMovies():Observable<any>{
    return this.http.get('https://freetestapi.com/api/v1/products')
  }
}
