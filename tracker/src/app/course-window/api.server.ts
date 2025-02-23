import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonApiService {
  private apiUrl = '/data.json';

  constructor(private http: HttpClient) {}

  // GET request to fetch data
  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
