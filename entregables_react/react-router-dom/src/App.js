import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// local components
import Home from './Home/Home';
import Users from './Users/Users';
import UserDetail from './UserDetail/UserDetail';
import PrivatePage from './PrivatePage/PrivatePage';

const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
  { id: 3, name: 'John Smith' },
  { id: 4, name: 'Jane Smith' },
  { id: 5, name: 'John Wick' },
  { id: 6, name: 'Jane Wick' },
];

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="users" element={<Users users={users} />} />
          <Route path="users/:id" element={<UserDetail users={users} />} />
          <Route path="private" element={<PrivatePage />} />
        </Routes>
      </BrowserRouter>

      <ul>
        <li> <a href="/">Home</a> </li>
        <li> <a href="/users">Users</a> </li>
        <li> <a href="/private">Private Page</a> </li>
      </ul>
    </>


  );
}

export default App;
