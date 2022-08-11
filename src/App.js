import './App.css';
import Todo from './Components/Todo';
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './Components/Navbar'
import Profile from './Components/Pages/Profile'
import SignIn from './Components/Pages/SignIn'
import Signup from './Components/Pages/Signup'
import ForgotPassword from './Components/Pages/ForgotPassword'
import PrivateRoute from './Components/PrivateRoute'
import Explore from './Components/Explore';
import {ToastContainer} from 'react-toastify'
function App() {
  return (
      <>
        <Router>
          <Routes>
            {/* Explore will be our Intro page */}
            {/* <Route path='/' element={<ToDo />} /> */}
            <Route path='/' element={<Explore />} />
            <Route path='/' element={<SignIn />} />
            <Route path='/profile' element={<PrivateRoute />}>
              <Route path='/profile' element={<Profile />} />
            </Route>
            <Route path='/todo' element={<PrivateRoute />}>
              <Route path='/todo' element={<Todo />} />
            </Route>
            <Route path='/sign-in' element={<SignIn />} />
            <Route path='/sign-up' element={<Signup />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />
          </Routes>
          <Navbar />
        </Router>

        <ToastContainer />
    </>
  );
}

export default App;
