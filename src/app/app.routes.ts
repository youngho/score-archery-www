import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/leaderboard', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent), data: { animation: 'home' } },
  { path: 'features', loadComponent: () => import('./components/features/features.component').then(m => m.FeaturesComponent), data: { animation: 'features' } },
  { path: 'arrows', loadComponent: () => import('./components/arrows/arrows.component').then(m => m.ArrowsComponent), data: { animation: 'arrows' } },
  { path: 'leaderboard', loadComponent: () => import('./components/leaderboard/leaderboard.component').then(m => m.LeaderboardComponent), data: { animation: 'leaderboard' } },
  { path: 'news', loadComponent: () => import('./components/news/news.component').then(m => m.NewsComponent), data: { animation: 'news' } },
  { path: '**', loadComponent: () => import('./components/not-found/not-found.component').then(m => m.NotFoundComponent), data: { animation: 'notfound' } }
];
