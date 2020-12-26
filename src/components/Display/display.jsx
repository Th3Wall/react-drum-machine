import { useStateValue } from '../../stateProvider';
import './display.sass'

const Display = () => {
    const [{displaySoundName}] = useStateValue();
    return (
        <div className='display' id="display">
            <h2>{displaySoundName}</h2>
        </div>
    )
}

export default Display;
