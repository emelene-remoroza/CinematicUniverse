// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { setError } from '../actions'

// function ErrorMessage () {
//   const errorMessage = useSelector(state => state.errorMessage)
//   const dispatch = useDispatch()

//   function clearErrClickHandler (e) {
//     e.preventDefault()
//     dispatch(setError(''))
//   }
//   return (
//     <div className='error'>
//       {errorMessage}
//       {errorMessage ? <button onClick={(e) => clearErrClickHandler(e)}>X</button> : ''}
//     </div>
//   )
// }

export default ErrorMessage
