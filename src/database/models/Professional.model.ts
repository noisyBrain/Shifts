import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

import { Address } from '../schemas';
import { id } from '../types/ObjectId';

export type ProfessionalDocumet = HydratedDocument<Professional>;

@Schema()
export class Professional {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  phoneNumber: string;

  @Prop()
  email: string;

  @Prop({ type: id, ref: 'Address' })
  address: Address;
}

export const ProfessionalSchema = SchemaFactory.createForClass(Professional);
