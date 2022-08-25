import './App.css';
import ControlledFormHooks from './components/ControlledFormHooks';
import HooksCounter from './components/HooksCounter';
import UseStateWithArrays from './components/UseStateWithArrays';
import UseStateWithObjects from './components/UseStateWithObjects';


function App() {
  return (
    <div className="App">
      <HooksCounter/>
      
      <ControlledFormHooks/>

      <UseStateWithArrays/>

      <UseStateWithObjects/>
      
    </div>
  );
}

export default App;

