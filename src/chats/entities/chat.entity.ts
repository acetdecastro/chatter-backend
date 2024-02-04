import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractEntity } from 'src/common/database/abstract.entity';

@ObjectType()
@Schema({ versionKey: false })
export class Chat extends AbstractEntity {
  @Field()
  @Prop()
  userId: string;

  @Field()
  @Prop()
  isPrivate: boolean;

  @Field({ nullable: true })
  @Prop()
  name?: string;

  @Field(() => [String])
  @Prop([String])
  userIds: string[];
}

export const ChatSchema = SchemaFactory.createForClass(Chat);
