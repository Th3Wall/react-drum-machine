import "./pad.sass";
import { useEffect, useRef } from 'react';
import { useStateValue } from "../../stateProvider";
import { actionTypes } from "../../reducer";

const Pad = props => {

    const audioRef = useRef();
    // eslint-disable-next-line
    const [state, dispatch] = useStateValue();

    const handlePad = () => {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
        dispatch({
            type: actionTypes.SET_DISPLAY,
            soundName: props.id
        })
    }

    const handleKey = (e) => {
        if (e.keyCode === props.keyCode) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
            dispatch({
                type: actionTypes.SET_DISPLAY,
                soundName: props.id
            })
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKey);
        return () => {
            window.removeEventListener('keydown', handleKey);
        };
    });

    return (
        <div
            className={`pad`}
            key={props.idx}
            onClick= {handlePad}
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