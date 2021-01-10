import './Machine.sass';
import Display from './components/Display/display';
import DrumPad from './components/DrumPad/drumPad';
import GithubCorner from 'react-github-corner';
import { useStateValue } from './stateProvider';

const Machine = () => {
  const [{githubProfileUrl}] = useStateValue();

  return (
      <div className='machine__wrp' id='drum-machine'>
        <Display />
        <DrumPad />
        <GithubCorner
          href={githubProfileUrl}
          bannerColor="#D88D36"
          octoColor="#282c34"
          size={80}
          direction="right" 
        />
      </div>
  );
}

export default Machine;
