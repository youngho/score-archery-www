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
  /** 레벨(누적), 게임수(월간·주간·일간 보조), 일간 최고 단일 점수 등 */
  extra?: number | string;
  /** 기간 내 플레이 판수 (월/주/일) */
  gameCount?: number | null;
  /** 기간 내 회당 평균 점수 (합계/게임수); 누적 탭은 전체 매치 평균 final_score */
  avgScorePerMatch?: number | null;
  /** 기간(또는 전체) 매치 평균 명중률 0–100 */
  avgAccuracy?: number | null;
  /** 매치당 평균 발사 화살 수 */
  avgArrowsPerMatch?: number | null;
  /** 해당 범위에서 가장 최근 완료 매치의 Unity 스테이지(씬) 이름 */
  lastStageSceneName?: string | null;
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

export type LeaderboardTab = 'alltime' | 'weekly' | 'monthly' | 'daily';

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
