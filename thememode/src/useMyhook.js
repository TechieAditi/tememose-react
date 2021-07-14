import React, { useReducer } from 'react';
export default function useMyhook() {
 
  const initialState =localStorage.getItem('dark') === 'true'
  const initailCheck =localStorage.getItem('check') === 'true'
  const reducer = (state,action) => {
    switch(action){
      case 'dark':
        return true
      case 'light':
        return  false
      default:
        return state

    }
  }
  const reducerCheck =(state,action) =>{
    switch(action){
      case 'on' :
        return false
      case 'off':
        return true 
      default:
        return state
    }
  }
  function changetheme () {
    darkTheme ? dispatch('light') : dispatch('dark')
}
  function handleChange() {
    state ? dispatchCheck('on') : dispatchCheck('off')
  }
    

 const [darkTheme, dispatch] = useReducer(reducer,initialState)
 const [state, dispatchCheck] = useReducer(reducerCheck,initailCheck);
  React.useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(darkTheme))
    localStorage.setItem('check',JSON.stringify(state))
  }, [darkTheme,state])
  return {
    darkTheme,
    changetheme,
    state,
    handleChange
}
}