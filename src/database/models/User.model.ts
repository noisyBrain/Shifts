import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { HydratedDocument } from 'mongoose';

import { Address } from '../schemas/Address.schema';
import { id } from '../types/ObjectId';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop({ type: id, ref: 'Address' })
  address: Address;
}

export const UserSchema = SchemaFactory.createForClass(User);
