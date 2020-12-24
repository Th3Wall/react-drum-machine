import "./pad.sass";
import { useEffect, createRef } from 'react';

const Pad = props => {

    const audioRef = createRef();

    useEffect(() => {
        const handleKey = (event) => {
            if (event.keyCode === props.keyCode) {
                audioRef.current.currentTime = 0;
                audioRef.current.play();
            }
        };
        window.addEventListener('keydown', handleKey);
    
        return () => {
            window.removeEventListener('keydown', handleKey);
        };
    });

    return (
        <div
            className="pad"
            key={props.idx}
            onClick= {(e) => props.handlePad(e)}
        >
            <audio
                ref={audioRef}
                src={props.url}
                id={props.keyTrigger}
                className='clip'
            ></audio>
            <span>{props.keyChar}</span>
        </div>
    )
}

export default Pad;