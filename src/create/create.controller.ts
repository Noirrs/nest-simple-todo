import { Controller, Get, Post, Query, Param, Req} from '@nestjs/common';
import { CreateService } from './create.service';
import {FastifyRequest } from "fastify"
import { Note } from "../schemas/note.schema"
@Controller("create")
export class CreateController {
  constructor(private readonly createService: CreateService) {}

  @Get()
   createNote(@Req() Request: FastifyRequest): Promise<Note>{
    let {name, done, description} = Request.headers
    let dto = this.createService.getDto({name,done,description})
    return this.createService.create(dto);
   }
   @Get("/all")
   getAll(@Req() Request: FastifyRequest): Promise<Note[]> {
    return this.createService.findAll()
   }
  }
