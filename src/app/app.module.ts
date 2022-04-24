import { CheckerService } from './../checker/checker.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CheckerModule } from '../checker/checker.module';
import { CreateModule } from "../create/create.module";
import { CreateController } from "../create/create.controller"
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017'), CreateModule, CheckerModule],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
