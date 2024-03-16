import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppController } from './app.controller';
import * as request from 'supertest';

describe('AppController', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
    }).compile();

    app = module.createNestApplication();
    await app.init();
  });

  it('should return 200 with an empty array on GET /health', async () => {
    const response = await request(app.getHttpServer())
      .get('/health');

    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });

});
