import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from './project';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  getProjectList(): Observable<Project[]> {
    const obs: Observable<any> = this.http.get('assets/projects.json')
    const data = (data) => {
      return data as Project[]
    }
    return obs.pipe(map(data))
  }
}
