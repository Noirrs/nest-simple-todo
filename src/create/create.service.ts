import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Note, NoteDocument } from '../schemas/note.schema';
import { CreateDto } from '../models/create.dto';

@Injectable()
export class CreateService {
  constructor(@InjectModel(Note.name) private NoteModel: Model<NoteDocument>) {}

  async create(createDto: CreateDto): Promise<Note> {
    const createdCat = new this.NoteModel(createDto);
    return createdCat.save();
  }

  async findAll(): Promise<Note[]> {
    return this.NoteModel.find().exec();

  }
  getDto({name,done,description}): CreateDto {
    return new CreateDto({name,done,description});
  }
  
}
