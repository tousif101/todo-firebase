import React from 'react'
import {useNavigate} from 'react-router-dom'
import Todo from './Todo'
function Explore() {

    const user = localStorage.getItem('user')
    const navigate = useNavigate()

    if(user){
        navigate('/todo')
        return <Todo/>
    }
    return (
        <div>Please Sign In</div>
    )
}

export default Explore

//TODO: Learn how to use React context with Firebase 
//TODO: Learn how to use Redux, Context and Firebase

