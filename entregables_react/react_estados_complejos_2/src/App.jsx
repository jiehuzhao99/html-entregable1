import { useState } from 'react'
import './App.css'

// local components
import { Header } from './components/Header'
import { Email } from './components/Email'

// actions
import { addUser } from './redux/userSlice'

// hooks
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      // using imported action on response/received data
      .then((data) => dispatch(addUser(data)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Header />
      <Email />
    </div>
  )
}

export default App
