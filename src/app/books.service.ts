import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ibooks } from './books';


@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private _url='/assets/data/data.json'
  constructor(private http: HttpClient) { }

  getBooks(): Observable<Ibooks[]>{
  return this.http.get<Ibooks[]>(this._url);

  }
}
