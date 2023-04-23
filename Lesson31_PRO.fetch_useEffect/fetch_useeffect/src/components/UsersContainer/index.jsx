import React, {useState, useEffect} from 'react'
import { get_users } from '../../requests/users_req'
import Users from '../Users';

export default function UsersContainer() {

    const [users, setUsers] = useState([]);

    useEffect(() => {get_users(setUsers)}, []);

  return (
    <div>
        {
          users.map(el => <Users key={el.id} {...el} />)
        }
    </div>
  )
}
