import logo from './logo.svg';
import './App.css';

// local components
import Timer from './Timer/Timer';
import LikeButton from './LikeButton/LikeButton';
import Users from './Users/Users';
import SelectItems from './Select/Select';
import InputWithError from './InputWithError/InputWithError';
import FetchJson from './FetchJson/FetchJson';
import PasswordTest from './PasswordTest/PasswordTest';
import UserForm from './UserForm/UserForm';

// hooks
import { useState } from 'react';


function App() {
  const [value, setValue] = useState("option1");
  const items = [
    {value: '0', label: "option1"}, 
    {value: '1', label: "option2"}, 
    {value: '3', label: "option3"}
  ];
  
  const handleSelectChange = (value) => {
    console.log(value);
    setValue(value);
  }

  return (
    <div className="App">
      {/* Pregunta 1 */}
      <Timer />

      {/* Pregunta 2 */}
      <LikeButton />

      {/* Preguntas 3, 4, 5 */}
      <Users />

      {/* Pregunta 6 */}
      <SelectItems value={value} items={items} onChange={handleSelectChange}/>

      {/* Pregunta 7 */}
      <InputWithError />

      {/* Pregunta 8 */}
      <FetchJson />

      {/* Pregunta 9 */}
      <PasswordTest />

      {/* Pregunta 10 */}
      <UserForm />
    </div>
  );
}

export default App;
