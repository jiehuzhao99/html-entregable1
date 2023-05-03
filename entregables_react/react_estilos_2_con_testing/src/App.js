import logo from './logo.svg';
import './App.css';

// styled components
import styled, { keyframes } from 'styled-components';
 
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Logo = styled.img`
  width: 100px;
  height: 100px;
  animation: ${rotate} 2s linear infinite;`;

function App() {
  return (
    <div className="App">
      <Logo src={logo} />
    </div>
  );
}

export default App;
