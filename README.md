# The Score of Archery - Angular Website

3D 활쏘기 게임 "The Score of Archery"의 공식 웹사이트입니다.

## 🚀 기술 스택

- **Angular 17** - 최신 Angular 프레임워크
- **TypeScript** - 타입 안전성을 위한 언어
- **Standalone Components** - 모던 Angular 컴포넌트 구조
- **CSS3** - 반응형 디자인과 모던 스타일링

## 📦 설치 및 실행

### 1. 의존성 설치
```bash
npm install
```

### 2. 개발 서버 실행
```bash
npm start
# 또는
ng serve
```

브라우저에서 `http://localhost:4200/`을 열어 확인하세요.

### 3. 프로덕션 빌드
```bash
npm run build
```

## 🏗️ 프로젝트 구조

```
src/
├── app/
│   ├── components/           # 재사용 가능한 컴포넌트들
│   │   ├── navigation/       # 네비게이션 바
│   │   ├── home/            # 홈 페이지 히어로 섹션
│   │   ├── features/        # 게임 특징 섹션
│   │   ├── arrows/          # 특수 화살 섹션
│   │   ├── leaderboard/     # 리더보드 섹션
│   │   ├── news/            # 뉴스 섹션
│   │   └── footer/          # 푸터
│   ├── app.component.*      # 메인 앱 컴포넌트
│   └── app.routes.ts        # 라우팅 설정
├── assets/                  # 정적 자산
├── index.html              # 메인 HTML
├── main.ts                 # 앱 진입점
└── styles.css              # 글로벌 스타일
```

## 🎮 게임 특징

- **직관적인 조작**: 화면을 당겨 발사하는 간단한 게임플레이
- **크로스 플랫폼**: Apple, Facebook, Google 로그인 지원
- **글로벌 리더보드**: 전 세계 플레이어들과 경쟁
- **특수 화살**: 6가지 특수 화살로 전략적 플레이
- **3D 그래픽**: SceneKit 기반 실감나는 그래픽
- **몰입감 있는 사운드**: 생생한 효과음과 배경음악

## 🌟 특수 화살

1. **불화살** 🔥 - 범위 화염 피해
2. **얼음화살** ❄️ - 타겟 얼리기
3. **번개화살** ⚡ - 연쇄 공격
4. **폭발화살** 💥 - 광역 타격
5. **트리플샷** 🎯 - 3개 화살 동시 발사
6. **유도화살** 🌟 - 자동 추적

## 📱 다운로드

- **App Store**: [다운로드](https://apps.apple.com)
- **Google Play**: [다운로드](https://play.google.com)

## 📞 문의

- **이메일**: support@arrowmaster.com
- **운영시간**: 평일 09:00 - 18:00

## 📄 라이선스

© 2025 YoHo Corp. LTD. All rights reserved.