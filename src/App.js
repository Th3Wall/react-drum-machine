import './App.sass';
import Display from './components/Display/display';
import DrumPad from './components/DrumPad/drumPad';

const App = () => {
  return (
    <div className='machine__wrp' id='drum-machine'>
      <Display />
      <DrumPad />
    </div>
  );
}

export default App;
