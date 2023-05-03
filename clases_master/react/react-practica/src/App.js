import logo from './logo.svg';
import './App.css';

// hooks
import { useState } from 'react';
import { useEffect } from 'react';
import { getValue } from '@testing-library/user-event/dist/utils';

function App() {
  const [users, setUsers] = useState(null);
  const [formData, setFormData] = useState({
    nombre: "",
    edad: ""
  });

  useEffect(() => {
    // async function fetchDatam{
    //   const res = await fetch("https://jsonplaceholder.typicode.com/users");
    //   const data = await res.json();
    //   setUsers(data);
    // }

    // fetchData();

    (async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    })();

  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, age } = e.target;

    setFormData({...formData,
      [name]: value
    })
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input name="nombre" type="text" placeholder="Nombre" />
        <input name="edad" type="number" placeholder="Edad" />
        <button type="submit">Enviar</button>
      </form>

      <ul>
        {users?.map((user) => (
          <li key={user.id}>{user.company.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
