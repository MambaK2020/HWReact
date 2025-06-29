const initialState = {
    users: [
      { id: 1, name: 'Kobe Bryant' },
      { id: 2, name: 'Michael Jordan' },
      { id: 3, name: 'Lebron James' },
    ],
  
    currentUser: {
      name: 'John Doe',
      status: 'online'
    }
  };
  function reducer(state = initialState, action) {
    switch (action.type) {
      case 'SET_USER_INFO':
        return {
          ...state,
          currentUser:{
          name:action.payload.name,
          status: action.payload.status
          }
        }
      default:
        return state
    }
  }
  
  export default reducer