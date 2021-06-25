import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  public baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  public testoShito = (): Observable<any> => {
    const obs: Observable<any> = this.http.get(this.baseUrl, {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
      }),
    });
    const data = (data) => {
      return data as JSON;
    };
    return obs.pipe(map(data));
  };
}
