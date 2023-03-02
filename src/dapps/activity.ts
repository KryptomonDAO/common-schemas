import { generateValidator, JSONSchema, ValidateFunction } from '../validation'

export type Activity = {
  id: string
  eventName: string
  date: number
}


export namespace Activity {
  export const schema: JSONSchema<Activity> = {
    type: 'object', 
    properties: {
      id: {
        type: 'string',
      },
      eventName: {
        type: 'string',
      },
      date: {
        type: 'integer',
      },
    },
    required: [
      'id',
      'eventName',
      'date',
    ],
  }

  export const validate: ValidateFunction<Activity> = generateValidator(schema)
}
