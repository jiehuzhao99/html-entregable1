import logo from './logo.svg';
import './App.css';
import ColorPicker from './ColorPicker/ColorPicker';
import ToDoList from './ToDoList/ToDoList';

function App() {
  return (
    <div className="App">
      <ColorPicker />
      <ToDoList />
    </div>
  );
}

export default App;
