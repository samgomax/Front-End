import React from 'react'
import UsersContainer from '../../components/UsersContainer'
import { useParams } from 'react-router-dom'

export default function UsersCardsPage() {

  const {role} = useParams();

  // console.log(role);

  return (
    <div>
        <UsersContainer role={role} />
    </div>
  )
}
