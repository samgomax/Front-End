import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteProductAction } from '../../store/reducers/userReducer';

export default function User({id, firstName, lastName, age}) {

const dispatch = useDispatch();

  return (
    <div onClick={() => dispatch(deleteProductAction(id)) }>
      <p>Name:{firstName} {lastName} </p>
      <p>Age:{age} </p>
    </div>
  )
}
