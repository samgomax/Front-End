import React from 'react'
import { addUserAction } from '../../store/reducers/userReducer';
import {useDispatch} from 'react-redux';

export default function AddUserForm() {

    const dispatch =useDispatch();

    const submit = event => {
        event.preventDefault();
        const {firstName, lastName, age} = event.target;
        const user = {
            id: Date.now(),
            firstName: firstName.value,
            lastName: lastName.value,
            age: +age.value
        }
        dispatch(addUserAction(user));
        event.target.reset();
    }

    return(
        <div>
        <form onSubmit={submit}>
            <input type="text" placeholder='First name' name='firstName' />
            <input type="text" placeholder='Last name' name='lastName' />
            <input type="text" placeholder='Age' name='age' />
            <button>Add user</button>
        </form>
    </div>
    )
}
