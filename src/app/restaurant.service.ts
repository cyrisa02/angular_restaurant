import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurant } from './restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }

  //get all records

  getAll(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>("http://localhost:3000/Restaurants");
  }

  //Add records 

  create(payload: Restaurant): Observable<Restaurant> {
    return this.http.post<Restaurant>("http://localhost:3000/Restaurants", payload);

  }

  // Get records by Id

  getbyId(id: number): Observable<Restaurant> {
    return this.http.get<Restaurant>(`http://localhost:3000/Restaurants/${id}`);
  }

  //update Records

  update(payload: Restaurant): Observable<Restaurant> {
    return this.http.put<Restaurant>(`http://localhost:3000/Restaurants/${payload.id}`, payload);
  }

}
