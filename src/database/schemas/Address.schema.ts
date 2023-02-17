import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<Address>;

@Schema()
export class Address {
  @Prop()
  street: string;

  @Prop()
  city: string;

  @Prop()
  province: string;

  @Prop()
  CP: string;
}

export const AddressSchema = SchemaFactory.createForClass(Address);
