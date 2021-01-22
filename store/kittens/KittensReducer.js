const initialState = {
  kittens: [],
};

export function kittensReducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_KITTENS":
      return { ...state, kittens: action.payload };
    default:
      return state;
  }
}
