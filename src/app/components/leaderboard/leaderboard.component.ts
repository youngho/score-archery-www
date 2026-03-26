import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaderboardTab } from '../../core/types';
import { LeaderboardService, LeaderboardPeriod } from '../../core/leaderboard.service';
import { LeaderboardEntry } from '../../core/types';

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css'],
})
export class LeaderboardComponent implements OnInit {
  activeTab: LeaderboardTab = 'alltime';
  entries: LeaderboardEntry[] = [];
  /** API `LeaderboardResponse.total` — 해당 기간 순위 집계 인원 */
  totalCount: number | null = null;
  /** 아바타 URL 로드 실패 시 이니셜로 대체 (키: rank|playerName) */
  failedAvatarKeys = new Set<string>();
  loading = false;
  error: string | null = null;

  constructor(private leaderboardService: LeaderboardService) {}

  ngOnInit(): void {
    this.loadEntries(this.activeTab);
  }

  setActiveTab(tab: LeaderboardTab): void {
    this.activeTab = tab;
    this.loadEntries(tab);
  }

  private loadEntries(period: LeaderboardTab): void {
    this.loading = true;
    this.error = null;
    this.failedAvatarKeys = new Set();
    this.leaderboardService
      .getLeaderboard(period as LeaderboardPeriod, 1, 50)
      .subscribe({
        next: (res) => {
          this.entries = res.entries ?? [];
          const t = res.total;
          this.totalCount = typeof t === 'number' && !Number.isNaN(t) ? t : null;
          this.loading = false;
        },
        error: () => {
          this.entries = [];
          this.totalCount = null;
          this.error = '리더보드를 불러올 수 없습니다.';
          this.loading = false;
        },
      });
  }

  avatarKey(entry: LeaderboardEntry): string {
    return `${entry.rank}|${entry.playerName}`;
  }

  showAvatarImage(entry: LeaderboardEntry): boolean {
    return !!entry.avatar && !this.failedAvatarKeys.has(this.avatarKey(entry));
  }

  onAvatarError(entry: LeaderboardEntry): void {
    const key = this.avatarKey(entry);
    if (this.failedAvatarKeys.has(key)) return;
    this.failedAvatarKeys = new Set(this.failedAvatarKeys).add(key);
  }

  rankClass(rank: number): string {
    if (rank === 1) return 'rank-badge gold';
    if (rank === 2) return 'rank-badge silver';
    if (rank === 3) return 'rank-badge bronze';
    return 'rank';
  }

  rankLabel(rank: number): string {
    if (rank === 1) return '🥇 1';
    if (rank === 2) return '🥈 2';
    if (rank === 3) return '🥉 3';
    return String(rank);
  }

  avatarInitials(name: string): string {
    if (!name || name.length < 2) return name?.slice(0, 2).toUpperCase() ?? '??';
    return name.slice(0, 2).toUpperCase();
  }

  formatScore(value: number | string | undefined): string {
    if (value === undefined || value === null) return '-';
    if (typeof value === 'number') return value.toLocaleString();
    return String(value);
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    // 화살표 키로 탭 전환
    if (event.target instanceof HTMLButtonElement) {
      const tabs: LeaderboardTab[] = ['alltime', 'monthly', 'weekly', 'daily'];
      const currentIndex = tabs.indexOf(this.activeTab);

      if (event.key === 'ArrowRight' && currentIndex < tabs.length - 1) {
        event.preventDefault();
        this.setActiveTab(tabs[currentIndex + 1]);
        this.focusTab(tabs[currentIndex + 1]);
      } else if (event.key === 'ArrowLeft' && currentIndex > 0) {
        event.preventDefault();
        this.setActiveTab(tabs[currentIndex - 1]);
        this.focusTab(tabs[currentIndex - 1]);
      }
    }
  }

  private focusTab(tab: LeaderboardTab): void {
    const tabElement = document.getElementById(`${tab}-tab`);
    if (tabElement) {
      tabElement.focus();
    }
  }
}
