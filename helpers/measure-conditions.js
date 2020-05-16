const conditionCases = [
  { title: 'equals', friendlyName: 'Equals' },
  { title: 'does_not_equal', friendlyName: 'Does Not Equal' },
  { title: 'is_less_than', friendlyName: 'Is Less Than' },
  { title: 'is_greater_than', friendlyName: 'Is Greater Than' },
  { title: 'is_between', friendlyName: 'Is Between' },
  { title: 'is_not_between', friendlyName: 'Is Not Between' }
]

const measureConditionResult = (measureCondition, value) => {
  const { expression, minValue, maxValue } = measureCondition
  switch (expression) {
    case 'equals':
      return value == minValue ? true : false
    case 'does_not_equal':
      return value != minValue ? true : false
    case 'is_less_than':
      return value < minValue ? true : false
    case 'is_greater_than':
      return value > minValue ? true : false
    case 'is_between':
      return value > minValue && value < maxValue ? true : false
    case 'is_not_between':
      return value < minValue || value > maxValue ? true : false
    default:
      return false
  }
}

export {
  measureConditionResult,
  conditionCases
}