import { Button, FormControl, InputLabel, Input } from '@mui/material'
import { useState, useEffect, useRef } from 'react'
import TodoItems from './TodoItems'
import {doc, serverTimestamp, setDoc, collection, addDoc, query, where, getDocs} from 'firebase/firestore'
import { db } from '../firebase.config'
import uuid from 'react-uuid'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import TodoList from './TodoList'
//import {addDoc, collection, serverTimestamp} from 'firebase/firestore'
function Todo() {
    const [user,setUser] = useState({})
    const [todos, setTodos] = useState([]) 
    const [input, setInput] = useState('')

    const auth = getAuth()
    const navigate = useNavigate()
    const isMounted = useRef(true)

    const fetchData = async () => {
        const newArray = []
        const querySnapshot = await getDocs(collection(db, "todos"));
        querySnapshot.forEach(doc => {
            if(doc.data().todo != ''){
                newArray.push(doc.data())
            }
        });
        setTodos(newArray)
    }
    useEffect(() => {

        if(isMounted){
            onAuthStateChanged(auth, (user) => {
                if(user) {
                    setUser(user)
                    fetchData()
                }else{
                    navigate('sign-in')
                }
            })

        }
        return () => {
            isMounted.current = false
        }

    },[isMounted])

    const addTodo = async (e) =>{
        e.preventDefault()
        //Save data in firebase
        try {
            const data = {
                isDone: false, 
                todo: input, 
                createdAt: serverTimestamp(),
                userRef: user.uid
            }
            await addDoc(collection(db,'todos'),data)
            setTodos([...todos,data]) //Spread and append the input
            setInput('') //Clear the input after you submit
        }catch(e){
            console.log(e)
        }
    }

    //Something weird is going on here. Fix later 

    return (
        // <TodoList user={user} todos={todos} />
        <div>
        <FormControl>
            <InputLabel>Write a Todo</InputLabel>
            <Input id="my-input" value={input} onChange={e =>{setInput(e.target.value)}} />
            <Button disabled={!input} variant="contained" type='submit' onClick={addTodo}>Add Todo</Button> 
        </FormControl>

        <ul>
            {todos.map(todo => (
                <TodoItems key={todo.createdAt} todo={todo} />
            ))}
        </ul>
    </div>
  )
}

export default Todo

/*
    Writing Notes for Medium Article
    - use the create react app command.
    - set up Firebase. Super easy. 
    - state -> short term memory. Cleared after refreshes
    - props -> Pass down data.

    - run javascript with HTML. JSX!
    
     run a small loop to go through the list and populate it

    What are react hooks: small snippets of code. 
    - useState -> Behind the scene does things for you

    save the input with the state. (Connect input to state)

    clear up the input after you submit!

    material ui to make it pretty. 

    break your code into reusable components



    
*/