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
  activeTab: LeaderboardTab | 'daily' = 'alltime';
  entries: LeaderboardEntry[] = [];
  loading = false;
  error: string | null = null;

  constructor(private leaderboardService: LeaderboardService) {}

  ngOnInit(): void {
    this.loadEntries(this.activeTab);
  }

  setActiveTab(tab: LeaderboardTab | 'daily'): void {
    this.activeTab = tab;
    this.loadEntries(tab);
  }

  private loadEntries(period: LeaderboardTab | 'daily'): void {
    this.loading = true;
    this.error = null;
    this.leaderboardService
      .getLeaderboard(period as LeaderboardPeriod, 1, 50)
      .subscribe({
        next: (res) => {
          this.entries = res.entries ?? [];
          this.loading = false;
        },
        error: () => {
          this.entries = [];
          this.error = '리더보드를 불러올 수 없습니다.';
          this.loading = false;
        },
      });
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
      const tabs: (LeaderboardTab | 'daily')[] = ['alltime', 'monthly', 'weekly', 'daily'];
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

  private focusTab(tab: LeaderboardTab | 'daily'): void {
    const tabElement = document.getElementById(`${tab}-tab`);
    if (tabElement) {
      tabElement.focus();
    }
  }
}
