import React, {useEffect} from 'react'
import { useSelector } from 'react-redux';
import User from '../User';
import { useDispatch } from 'react-redux';
import { getAllUsers } from '../../async_action/users_req';

export default function UsersContainer() {

  const dispatch = useDispatch();

  useEffect(() => {
    // getAllUsers(dispatch)
    dispatch(getAllUsers)
  }, [])

    const users_state = useSelector(state => state.users)


  return (
    <div>
        {
            users_state.map(el => <User key={el.id} {...el} />)
        }
    </div>
  )
}
