import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
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
}
