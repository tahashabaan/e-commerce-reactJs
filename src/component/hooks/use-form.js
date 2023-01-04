import React, { useState, useReducer } from 'react'

const initialState = {
  value:'',
  touched:false
}

 const reducerInput = (state, action) => {

  if ( action.type === 'INPUT_USER' ) {

    return {
      value: action.value,
      touched:state.touched
    }
  }

  if ( action.type === 'BLUR' ) {

    return {
      value: state.value,
      touched:true
    }

  }

  if ( action.type === 'RESET' ) {

    return {
      value: '',
      touched: false
    }
  }
  
 }

 const useForm = (enterInputIsValid) => {

  const [ inputState, dispatchInput ]  = useReducer( reducerInput,initialState )

   const inputIsValid = enterInputIsValid(inputState.value);
   const hasError = inputState.touched && !inputIsValid;

   const onChangeHandler = (e) => {
      dispatchInput({type:'INPUT_USER', value:e.target.value})
   }

   const onBlurHandler = (e) => { dispatchInput({type:'BLUR'})  }

   const resetHandler = (e) => {  dispatchInput({type:'RESET'})  }


   return {
    inputVal:inputState.value,
    hasError,
    onChangeHandler,
    onBlurHandler,
    resetHandler
   }
}

export default useForm;