import { FastifyRequest } from 'fastify';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CheckerService {
  getCheckDatas(request:FastifyRequest): object {
    return {
        request: {
            hostname: request.hostname,
            ip: request.ip,
            method: request.method,
            originalUrl: request.url,
            path: request.routerPath,
            query: request.query
          }
    }
    
  }
}
