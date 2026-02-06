import { describe, it, expect } from '@jest/globals';

import request from 'supertest';
import { createApp } from '../../../app';

const app = createApp();

describe('Health Feature', () => {
  describe('GET /api/health', () => {
    it('200 상태 코드와 함께 성공 메세지를 반환한다', async () => {
      const response = await request(app)
        .get('/api/health')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(response.body).toHaveProperty('success', true);
      expect(response.body).toHaveProperty('message', 'OK');
    });

    it('응답에 timestamp가 포함되어야 한다', async () => {
      const response = await request(app).get('/api/health');

      expect(response.body).toHaveProperty('timestamp');
      expect(typeof response.body.timestamp).toBe('string');
      expect(new Date(response.body.timestamp).toString()).not.toBe('Invalid Date');
    });

    it('timestamp는 ISO 8601 형식이어야 한다', async () => {
      const response = await request(app).get('/api/health');

      const isoRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
      expect(response.body.timestamp).toMatch(isoRegex);
    });
  });
});
