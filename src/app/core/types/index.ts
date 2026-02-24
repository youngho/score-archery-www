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
  /** 누적/탭 공통; 레벨(누적), 게임수(월간), 평균점수(주간), 최고점수(일간) 등 */
  extra?: number | string;
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

/** Admin: user with active session (currently in-game or recently active) */
export interface ActiveUser {
  publicId: string;
  nickname: string;
  lastActivityAt: string;
  deviceType: string | null;
  sessionId: string;
}
