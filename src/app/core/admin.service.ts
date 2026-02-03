import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ActiveUser } from './types';

@Injectable({ providedIn: 'root' })
export class AdminService {
  private readonly baseUrl = `${environment.apiUrl}/api/admin`;

  constructor(private http: HttpClient) {}

  getActiveUsers(): Observable<ActiveUser[]> {
    return this.http.get<ActiveUser[]>(`${this.baseUrl}/active-users`);
  }
}
