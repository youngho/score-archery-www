// 공통 타입 정의

export interface ArrowType {
  id: string;
  name: string;
  description: string;
  icon: string;
  effect: string;
}

export interface LeaderboardEntry {
  rank: number;
  playerName: string;
  score: number;
  avatar?: string;
  country?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  content: string;
  date: Date;
  imageUrl?: string;
  category?: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export type LeaderboardTab = 'alltime' | 'weekly' | 'monthly';

export interface AppConfig {
  appName: string;
  appVersion: string;
  supportEmail: string;
  appStoreUrl: string;
  playStoreUrl: string;
}
