import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // 경로 별칭 설정
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  // Vitest 설정
  test: {
    // Jest처럼 전역 함수 사용 (describe, it, expect 등)
    globals: true,

    // 브라우저 환경 시뮬레이션
    environment: 'jsdom',

    // 테스트 설정 파일
    setupFiles: './src/test/setup.ts',

    // CSS 처리
    css: true,
  },
});
