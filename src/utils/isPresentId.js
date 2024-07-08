// function for find id from an array
export function isPresentId(sourceArray, findId) {
  return sourceArray?.find((value) => value?.id === findId);
}
