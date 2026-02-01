# TDD Project

## 프로젝트 구조

```
src/
├── app.ts                          # Express 애플리케이션 설정
├── server.ts                       # 서버 실행
├── common/                         # 공통 모듈
│   ├── types/                      # 공통 타입 정의
│   │   └── response.types.ts       # API 응답 타입
│   ├── middleware/                 # 공통 미들웨어
│   │   └── error.middleware.ts     # 에러 핸들링
│   └── utils/                      # 공통 유틸리티
│       └── response.util.ts        # 응답 헬퍼 함수
└── features/                       # 기능별 모듈
    └── health/                     # Health Check 기능
        ├── health.routes.ts        # 라우팅
        ├── health.controller.ts    # 컨트롤러
        └── __tests__/              # 테스트
            └── health.test.ts
```

## 구조 설명

### Common (공통 모듈)

- **types/**: 프로젝트 전체에서 사용하는 공통 타입 정의
- **middleware/**: 에러 핸들링 등 공통 미들웨어
- **utils/**: 응답 포맷팅 등 공통 유틸리티 함수

### Features (기능별 모듈)

각 기능은 독립적인 폴더로 관리:

- **routes**: API 엔드포인트 정의
- **controller**: 비즈니스 로직 처리
- **service**: 복잡한 비즈니스 로직 (필요시)
- **types**: 해당 기능의 타입 정의 (필요시)
- ****tests****: 해당 기능의 테스트 코드

## 테스트 실행

```bash
# 전체 테스트
npm test

# 특정 기능 테스트
npm test health

# watch 모드
npm test -- --watch
```
