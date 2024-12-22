const generateOptions = (
  values: string[],
  namespace: string,
  translator: (key: string) => string,
) =>
  values.map((value) => ({
    label: translator(`${namespace}.${value}`),
    value,
  }))

export default generateOptions
