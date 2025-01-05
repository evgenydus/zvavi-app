import _mapKeys from 'lodash/mapKeys'
import _camelCase from 'lodash/camelCase'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const convertSnakeToCamel = (data: any) => {
  if (Array.isArray(data)) {
    return data.map((item) => _mapKeys(item, (_: unknown, key: string) => _camelCase(key)))
  }

  return _mapKeys(data, (_: unknown, key: string) => _camelCase(key))
}

export default convertSnakeToCamel
