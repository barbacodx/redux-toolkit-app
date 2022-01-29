import React from 'react'
import { useAppDispatcher, useAppSelector} from "./app/hooks";
import { incremented, decremented, amountAdded } from "./features/counter/counter-slice";
import logo from './logo.svg'
import './App.css'

function App() {
    const count = useAppSelector((state) => state.counter.value);
    const dispatch = useAppDispatcher();
    //add
    function handleClickAdd() {
       dispatch(incremented());
     }
     //min
    function handleClickRemove() {
        dispatch(decremented());
    }
    //amount
     function handleClickAmounted(){
        dispatch(amountAdded(3));
     }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React Redux!</p>
        <p>
          <h2>
            count is: {count}
          </h2>
            <button onClick={handleClickAdd}>ADD</button>
            <button onClick={handleClickRemove}>MIN</button>
            <button onClick={handleClickAmounted}>AMOUNT</button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
