import { AppService } from './../app/app.service';
import { Controller, Get,Req } from "@nestjs/common";
import { FastifyRequest } from "fastify"
import { CheckerService } from "./checker.service"
@Controller("check")
export class CheckerController {
    constructor(private checkerService: CheckerService) {}
    @Get()
    getServerData(@Req() request: FastifyRequest): object {
        return this.checkerService.getCheckDatas(request)
        
    }
}

