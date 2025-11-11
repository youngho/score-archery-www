import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  private readonly storageKey = 'lang';

  constructor(private readonly translate: TranslateService) {}

  ngOnInit(): void {
    const saved = (localStorage.getItem(this.storageKey) as 'ko' | 'en' | null) ?? null;
    const browser = navigator.language.startsWith('ko') ? 'ko' : 'en';
    const lang = saved ?? browser;
    this.translate.addLangs(['ko', 'en']);
    this.translate.setDefaultLang('ko');
    this.translate.use(lang);
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    // Enter 또는 Space 키로 링크 활성화
    if (
      (event.key === 'Enter' || event.key === ' ') &&
      event.target instanceof HTMLElement &&
      event.target.tagName === 'A'
    ) {
      event.preventDefault();
      (event.target as HTMLAnchorElement).click();
    }
  }

  onLangChange(lang: string): void {
    const next = lang === 'en' ? 'en' : 'ko';
    this.translate.use(next);
    localStorage.setItem(this.storageKey, next);
  }
}
