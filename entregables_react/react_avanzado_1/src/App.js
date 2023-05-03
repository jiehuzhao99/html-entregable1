import logo from './logo.svg';
import './App.css';

// tools
import React, { lazy, Suspense } from 'react';

// local components
// import Counter from './Counter/Counter';
import ShowServerConfig from './ShowServerConfig/ShowServerConfig';
import ShoppingCart from './ShoppingCart/ShoppingCart';

const LazyCounter = lazy(() => import('./Counter/Counter'));
const config = {
  minConnections: 1,
  maxConnections: 10,
  restartAlways: true,
  environment: "live",
  SSL: true,
};

const invalidConfig = {
  minConnections: "1",
  maxConnections: "asda",
  restartAlways: false,
  environment: "aefa",
  SSL: false,
};

function App() {
  return (
    <div className="App">
      {/* Preguntas 2 y 3 */}
      <Suspense fallback={<div>Loading...</div>}>
        <LazyCounter />
      </Suspense>

      {/* Pregunta 4 */}
      <ShowServerConfig config={config}/>

      {/* Pregunta 5 */}
      <ShoppingCart />
    </div>
  );
}

export default App;
