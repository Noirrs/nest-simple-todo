import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NoteDocument = Note & Document;

@Schema()
export class Note {
  @Prop({type: String})
  name: String;

  @Prop({type: Boolean})
  done: boolean;

  @Prop({type: String})
  description: String;
}

export const NoteSchema = SchemaFactory.createForClass(Note);

