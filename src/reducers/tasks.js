const initialState = {
  list: [],
  loaded: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TASKS':
      return initialState
    case 'RECEIVE_TASKS':
      return {
        list: action.tasks,
        loaded: true
      }
    default:
      return state
  }
};
