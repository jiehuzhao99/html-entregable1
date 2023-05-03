import logo from './logo.svg';
import './App.css';

// local components
import Greeting from './Greeting/Greeting';
import ShowName from './ShowName/ShowName';
import ShowDate from './ShowDate/ShowDate';
import ShowMessage from './ShowMessage/ShowMessage';
import Loading from './Loading/Loading';
import Button from './Button/Button';
import Inputs from './Inputs/Inputs';
import Counter from './Counter/Counter';
import StringCounter from './StringCounter/StringCounter';

function App() {
  return (
    <div className="App">
      <Greeting />
      <ShowName />
      <ShowDate />
      <ShowMessage />
      <Loading show={true} />
      <Button buttonFunction={() => console.log("holi")} />
      <Inputs />
      <Counter />
      <StringCounter />
    </div>
  );
}

export default App;
