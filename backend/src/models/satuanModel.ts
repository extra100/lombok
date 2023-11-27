import { modelOptions, prop, getModelForClass } from '@typegoose/typegoose'

@modelOptions({ schemaOptions: { timestamps: true } })
export class Satuan {
  public _id?: string
  @prop({ required: false })
  public id_satuan!: string
  @prop({ required: true })
  public nama_satuan!: string
}
export const SatuanModel = getModelForClass(Satuan)
