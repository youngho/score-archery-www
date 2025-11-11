import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="not-found" aria-labelledby="not-found-title">
      <h1 id="not-found-title">페이지를 찾을 수 없습니다 (404)</h1>
      <p>요청하신 페이지가 존재하지 않거나 이동되었어요.</p>
      <a routerLink="/" class="back-link" aria-label="홈으로 돌아가기">홈으로 돌아가기</a>
    </section>
  `,
  styles: [
    `
      .not-found { text-align: center; padding: 3rem 1rem; }
      .back-link { display: inline-block; margin-top: 1rem; border: 1px solid var(--color-border); padding: .5rem .9rem; border-radius: 999px; }
    `,
  ],
})
export class NotFoundComponent {}
