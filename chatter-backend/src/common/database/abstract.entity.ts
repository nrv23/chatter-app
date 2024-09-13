import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Prop, Schema } from "@nestjs/mongoose";
import { SchemaTypes, Types } from "mongoose";


@Schema() // crear esquemas en mongodb
@ObjectType({
    isAbstract: true
})
export class AbstractEntity {

    @Prop({type: SchemaTypes.ObjectId})
    @Field(() => ID) // este campo retorna segun graphql
    _id: Types.ObjectId;
}