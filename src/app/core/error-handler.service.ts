import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalErrorHandler implements ErrorHandler {
  handleError(error: Error | unknown): void {
    // 브라우저 환경에서만 처리
    if (typeof window !== 'undefined') {
      const errorMessage =
        error instanceof Error ? error.message : '알 수 없는 오류가 발생했습니다.';

      // 개발 환경에서만 콘솔에 상세 에러 출력
      if (!this.isProduction()) {
        console.error('Global Error Handler:', error);
        if (error instanceof Error && error.stack) {
          console.error('Stack trace:', error.stack);
        }
      }

      // 실제 프로덕션에서는 에러 로깅 서비스로 전송
      // this.logErrorToService(error);
    }
  }

  private isProduction(): boolean {
    return (
      typeof window !== 'undefined' &&
      window.location.hostname !== 'localhost' &&
      !window.location.hostname.includes('127.0.0.1')
    );
  }

  // 실제 프로덕션에서는 에러 로깅 서비스로 전송하는 메서드
  // private logErrorToService(error: Error | unknown): void {
  //   // 예: Sentry, LogRocket 등
  // }
}
