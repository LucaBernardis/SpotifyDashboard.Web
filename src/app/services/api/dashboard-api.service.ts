import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardApiService {

  // Backend api EndPoint for user data
  private readonly _baseUrl = '/serverApi/dashboard';

  // Shared Headers
  private httpheaders = new HttpHeaders({
    'Authorization': `Bearer ${this.dashboardService.getToken()}`,
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient, private dashboardService: DashboardService) { }

  getDashboardData(): Observable<any>{
    return this.http.get<any>(`${this._baseUrl}/data`, {headers: this.httpheaders});
  }

  getDashboardConfig(): Observable<any>{
    return this.http.get<any>(`${this._baseUrl}/config`, {headers: this.httpheaders});
  }
}
