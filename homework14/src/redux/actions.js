export const setUserInfo = (name,status) => {

    return {
        type: 'SET_USER_INFO',
        payload: {name, status}
    }
    
    
    }