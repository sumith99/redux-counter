import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { decrementListener, incrementListener } from './action/actionListener';
function App() {

  const Dispatch = useDispatch();
  const myState = useSelector(state => state.reducerListener)
  console.log(myState);

  return (
    <div className="App">
      <div>
        <button onClick={() => Dispatch(incrementListener())}>+</button>
        {myState.counter}
        <button onClick={() => Dispatch(decrementListener())}>-</button>
      </div>
    </div>
  );
}

export default App;
