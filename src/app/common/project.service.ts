import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from './project';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private http: HttpClient) {}

  getProjectList(): Observable<Project[]> {
    // Get du fichier json contenant les projets
    const obs: Observable<any> = this.http.get('assets/projects.json');
    // On GET tout
    const data = (data) => {
      // on return la reponse en tant que tableau de Projet
      return data as Project[];
    };
    // return data en observable
    return obs.pipe(map(data));
  }
}
