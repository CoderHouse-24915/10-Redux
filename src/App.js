import './App.css';

import { increment, decrement, singInOut } from './actions';

import {useSelector, useDispatch} from 'react-redux';

const App = () => {
  const counter = useSelector((state) => state.counter)
  const isLogged = useSelector((state) => state.isLogged)

  const dispatch = useDispatch()

  const handleIncrement = () => {
    dispatch(increment(5))
  }

   const handleDecrement = () => {
    dispatch(decrement())
  }

  const toogleSingInOut = () => {
    dispatch(singInOut())
  }

  return (
    <div className="App">
      <h1>Redux</h1>
      <p>Counter: {counter}</p>
      <button onClick={handleIncrement}>Incrementar</button>
      <button onClick={handleDecrement}>Decrementar</button>

      {isLogged ? <p>Usuario Logueado!</p> : <p>Usuario no Logueado!</p>}

      <button onClick={toogleSingInOut}>SING IN / OUT</button>
    </div>
  );
}

export default App;
