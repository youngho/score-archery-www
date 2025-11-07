import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/leaderboard', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./components/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'features',
    loadComponent: () =>
      import('./components/features/features.component').then((m) => m.FeaturesComponent),
  },
  {
    path: 'arrows',
    loadComponent: () =>
      import('./components/arrows/arrows.component').then((m) => m.ArrowsComponent),
  },
  {
    path: 'leaderboard',
    loadComponent: () =>
      import('./components/leaderboard/leaderboard.component').then((m) => m.LeaderboardComponent),
  },
  {
    path: 'news',
    loadComponent: () => import('./components/news/news.component').then((m) => m.NewsComponent),
  },
];
