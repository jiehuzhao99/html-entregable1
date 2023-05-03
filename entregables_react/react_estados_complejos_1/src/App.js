import logo from './logo.svg';
import './App.css';

// custom hook
import { useLanguageContext } from './LanguageProvider';

// providers
import { LanguageProvider } from './LanguageProvider';
import { ToDoProvider } from './ToDoProvider';

// local components
import Header from './Header/Header';
import Content from './Content/Content';
import ToDoList from './ToDoList/ToDoList';

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <Header />
        <Content />
      </LanguageProvider>

      <ToDoProvider>
        <ToDoList />
      </ToDoProvider>
    </div>
  );
}

export default App;
