import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

interface SpecialArrow {
  id: 'fire' | 'ice' | 'lightning' | 'explosive' | 'triple' | 'homing';
  icon: string;
  stats?: { area?: string; control?: string; damage?: string; cooldown?: string };
}

@Component({
  selector: 'app-arrows',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './arrows.component.html',
  styleUrls: ['./arrows.component.css'],
})
export class ArrowsComponent {
  arrows: SpecialArrow[] = [
    { id: 'fire', icon: '🔥', stats: { area: '광역', control: '지속 피해', damage: '중~고', cooldown: '중간' } },
    { id: 'ice', icon: '❄️', stats: { area: '단일', control: '강함', damage: '중', cooldown: '짧음' } },
    { id: 'lightning', icon: '⚡', stats: { area: '연쇄', control: '약함', damage: '중', cooldown: '중간' } },
    { id: 'explosive', icon: '💥', stats: { area: '광역', control: '경직', damage: '매우 높음', cooldown: '김' } },
    { id: 'triple', icon: '🎯', stats: { area: '광역(전방)', control: '약함', damage: '중', cooldown: '짧음' } },
    { id: 'homing', icon: '🌟', stats: { area: '단일', control: '없음', damage: '중', cooldown: '중간' } }
  ];

  selectedId: SpecialArrow['id'] | null = null;

  selectArrow(id: SpecialArrow['id']): void {
    this.selectedId = id === this.selectedId ? null : id;
  }

  get selected(): SpecialArrow | null {
    return this.arrows.find(a => a.id === this.selectedId) ?? null;
  }
}
