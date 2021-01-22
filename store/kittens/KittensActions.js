export function updateKittens(kittens) {
  return {
    type: "UPDATE_KITTENS",
    payload: kittens,
  };
}
