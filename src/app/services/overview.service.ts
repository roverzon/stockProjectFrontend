import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OverviewsListComponent } from '../components/overviews-list/overviews-list.component';
import { Overview } from '../models/overview.model';

const baseUrl = 'http://127.0.0.1:8080/api/overviews';

@Injectable({
  providedIn: 'root'
})
export class OverviewService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Overview[]>{
    return this.http.get<Overview[]>(baseUrl);
  }

}
