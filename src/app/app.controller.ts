import { Controller, Get, Post, Query, Param, Req} from '@nestjs/common';
import { AppService } from './app.service';
import {FastifyRequest } from "fastify"
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello() 
  }

}
