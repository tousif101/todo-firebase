import { List, ListItem,ListItemText } from "@mui/material"

function TodoItems({todo}) {
  return (
    <List>
        <ListItem>
            <ListItemText primary={todo.todo} />
        </ListItem>
    </List>
  )
}

export default TodoItems


// -> React App. React Native App
// Java and SQL Backend 
// or Mongo and Express Backend 
//-> Make an application with these 
// vs Firebase. 
//