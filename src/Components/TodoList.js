// import { Button, FormControl, InputLabel, Input } from '@mui/material'
// import { useState, useEffect,useRef } from 'react'
// import TodoItems from './TodoItems'
// import {serverTimestamp, collection, addDoc, query, getDocs} from 'firebase/firestore'
// import { db } from '../firebase.config'

// function TodoList({user,todos}) {
//     //const [todos, setTodos] = useState([]) 
//     const [input, setInput] = useState('')


//     // useEffect(() => {
//     //     const fetchData = async () => {
//     //         const querySnapshot = await getDocs(collection(db, "todos"));
//     //         querySnapshot.forEach((doc) => {
//     //             //setTodos([...todos,doc.data()])
//     //             //newArray.concat(doc.data())
//     //             setTodos([...todos,doc.data()])
//     //         });
//     //     }
//     //     fetchData()
//     // },[])

//     const addTodo = async (e) =>{
//         e.preventDefault()
//         //Save data in firebase
//         try {
//             const data = {
//                 isDone: false, 
//                 todo: input, 
//                 createdAt: serverTimestamp(),
//                 userRef: user.uid
//             }
//             await addDoc(collection(db,'todos'),data)
//             //setTodos([...todos,data]) //Spread and append the input
//             setInput('') //Clear the input after you submit
//         }catch(e){
//             //toast.error('Something went wrong with adding Todo')
//             console.log(e)
//         }
//     }
//   return (
//     <div>
//         <FormControl>
//             <InputLabel>Write a Todo</InputLabel>
//             <Input id="my-input" value={input} onChange={e =>{setInput(e.target.value)}} />
//             <Button disabled={!input} variant="contained" type='submit' onClick={addTodo}>Add Todo</Button> 
//         </FormControl>

//         <ul>
//             {todos.map(todo => (
//                 <TodoItems key={todo.userRef} todo={todo} />
//             ))}
//         </ul>
//     </div>
//   )
// }

// export default TodoList