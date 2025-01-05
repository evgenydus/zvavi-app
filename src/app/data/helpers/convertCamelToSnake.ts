/* eslint-disable @typescript-eslint/no-explicit-any */
const convertCamelToSnake = (object: Record<string, any>): Record<string, any> => {
  if (Array.isArray(object)) {
    return object.map((item) => convertCamelToSnake(item))
  }

  if (object !== null && typeof object === 'object') {
    return Object.keys(object).reduce(
      (acc, key) => {
        const snakeKey = key.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)

        acc[snakeKey] = convertCamelToSnake(object[key])

        return acc
      },
      {} as Record<string, any>,
    )
  }

  return object
}

export default convertCamelToSnake
