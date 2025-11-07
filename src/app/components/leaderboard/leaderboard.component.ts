import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaderboardTab } from '../../core/types';

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css'],
})
export class LeaderboardComponent {
  activeTab: LeaderboardTab | 'daily' = 'alltime';

  setActiveTab(tab: LeaderboardTab | 'daily'): void {
    this.activeTab = tab;
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
