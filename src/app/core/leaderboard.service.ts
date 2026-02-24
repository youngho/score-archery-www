import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { LeaderboardEntry } from './types';

export type LeaderboardPeriod = 'alltime' | 'monthly' | 'weekly' | 'daily';

export interface LeaderboardResponse {
  entries: LeaderboardEntry[];
  total?: number;
}

@Injectable({ providedIn: 'root' })
export class LeaderboardService {
  private readonly baseUrl = `${environment.apiUrl}/api/leaderboard`;

  constructor(private http: HttpClient) {}

  /**
   * 기간별 리더보드를 순위 구간으로 조회합니다.
   * @param period alltime | monthly | weekly | daily
   * @param offset 순위 시작 (1-based 권장)
   * @param limit 조회할 개수
   */
  getLeaderboard(
    period: LeaderboardPeriod,
    offset: number = 1,
    limit: number = 50
  ): Observable<LeaderboardResponse> {
    const params = new HttpParams()
      .set('period', period)
      .set('offset', String(offset))
      .set('limit', String(limit));

    return this.http
      .get<LeaderboardResponse>(this.baseUrl, { params })
      .pipe(
        catchError(() =>
          of({ entries: [], total: 0 } as LeaderboardResponse)
        )
      );
  }
}
