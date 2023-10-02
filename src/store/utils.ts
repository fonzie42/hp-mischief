
export const upsert = <T>(
  data: T[],
  item: T,
  filterFunction: (argument: T) => boolean
) => {
  const newData = data.filter(filterFunction)
  return [...newData, item]
}