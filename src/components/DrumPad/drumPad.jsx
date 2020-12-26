import Pad from "../Pad/pad";
import "./drumPad.sass";
import { soundBank } from '../data/soundBank';

const DrumPad = () => {
    return (
        <div className='drumPad'>
            {soundBank && soundBank.map((pad, idx) => (
                <Pad
                    key={idx}
                    id={pad.id}
                    url={pad.url}
                    keyCode={pad.keyCode} 
                    keyChar={pad.keyChar}
                />
            ))}
        </div>
    )
}

export default DrumPad;