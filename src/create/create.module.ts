import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CreateController } from './create.controller';
import { CreateService } from './create.service';
import { Note, NoteSchema } from '../schemas/note.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: Note.name, schema: NoteSchema }])],
  controllers: [CreateController],
  providers: [CreateService],
})
export class CreateModule {}