import { generateValidator, JSONSchema, ValidateFunction } from '../validation'

export type ActivityExtraData = {
  id: string
  label: string
  value: string
}


export namespace ActivityExtraData {
  export const schema: JSONSchema<ActivityExtraData> = {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      label: {
        type: 'string',
      },
      value: {
        type: 'string',
      },
    },
    required: [
      'id',
      'label',
      'value',
    ],
  }

  export const validate: ValidateFunction<ActivityExtraData> = generateValidator(schema)
}
