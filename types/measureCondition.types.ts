export default interface MeasureCondition {
  _id?: string
  expression: string
  minValue: number
  maxValue: number
  field: string
  color: string
}