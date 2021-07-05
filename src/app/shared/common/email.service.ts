import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  public url = 'http://localhost:8080/sendmail';
  constructor(private http: HttpClient) {}
  sendMail(inputs) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = {
      headers,
    };
    const body = inputs;
    console.log(body);
    this.http.post(this.url, body, options).subscribe((res) => res);
  }
}
