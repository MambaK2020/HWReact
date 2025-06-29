const initialState = {
  users: [
    { id: 1, name: 'Kobe Bryant' },
    { id: 2, name: 'Michael Jordan' },
    { id: 3, name: 'Lebron James' },
  ],

  filter: '',
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload,
      }
    default:
      return state
  }
}

export default reducer