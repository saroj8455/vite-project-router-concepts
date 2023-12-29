import { useState } from 'react';
import * as Prime from './config/Prime';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <div className='card'>
        <Prime.Card title='Title'>
          <p className='m-0'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
          </p>
        </Prime.Card>
      </div>
    </>
  );
}

export default App;
