import './App.sass';
import Display from './components/Display/display';
import Pads from './components/Pads/pads';

const App = () => {
  return (
    <div className='machine__wrp' id='drum-machine'>
      <Display />
      <Pads />
    </div>
  );
}

export default App;
