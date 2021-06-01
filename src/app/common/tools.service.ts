import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Tool } from './tool';

@Injectable({
  providedIn: 'root',
})
export class ToolsService {
  constructor(private http: HttpClient) {}

  getToolsList(): Observable<Tool[]> {
    // Get du fichier json contenant les outils
    const obs: Observable<any> = this.http.get('assets/tools.json');
    // On GET tout
    const data = (data) => {
      // on return la reponse en tant que tableau de Tool
      return data as Tool[];
    };
    // return data en observable
    return obs.pipe(map(data));
  }
}
