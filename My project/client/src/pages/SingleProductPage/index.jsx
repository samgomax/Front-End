import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';

export default function SingleProductPage() {

  const dispatch = useDispatch();

  const {id} = useParams();
  useEffect(() => dispatch())


  return (
    <div>

    </div>
  )
}
