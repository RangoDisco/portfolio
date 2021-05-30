import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Tool } from './tool';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor(private http: HttpClient) { }

  getToolsList(): Observable<Tool[]> {
    const obs: Observable<any> = this.http.get('assets/tools.json')
    const data = (data) => {
      return data as Tool[]
    }
    return obs.pipe(map(data))
  }
}
