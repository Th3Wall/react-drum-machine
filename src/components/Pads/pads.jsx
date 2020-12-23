import "./pads.sass";
import { useState, useEffect, useRef } from 'react'

const Pads = () => {

    const soundBank = [
        {
            keyTrigger: 'Q',
            id: 'Heater-1',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
        },
        {
            keyTrigger: 'W',
            id: 'Heater-2',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
        },
        {
            keyTrigger: 'E',
            id: 'Heater-3',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
        },
        {
            keyTrigger: 'A',
            id: 'Heater-4',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
        },
        {
            keyTrigger: 'S',
            id: 'Clap',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
        },
        {
            keyTrigger: 'D',
            id: 'Open-HH',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
        },
        {
            keyTrigger: 'Z',
            id: "Kick-n'-Hat",
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
        },
        {
            keyTrigger: 'X',
            id: 'Kick',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
        },
        {
            keyTrigger: 'C',
            id: 'Closed-HH',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
        }
    ];

    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const handlePad = () => {
        const audio = audioRef.current;
        audio.currentTime = 0;
        audio.play();
        setIsPlaying(true)
    }

    useEffect(() => {
        audioRef.current.addEventListener('ended', () => {
            setIsPlaying(false)
        })
    }, [])

    return (
        <div className='pads'>
            {soundBank && soundBank.map((pad, idx) => (
                <div
                    className="drum-pad"
                    key={idx}
                    onClick={!isPlaying && handlePad}
                >
                    <audio
                        src={pad.url}
                        id={pad.keyTrigger}
                        ref={audioRef}
                        className='clip'
                    ></audio>
                    <span>{pad.keyTrigger}</span>
                </div>
            ))}
        </div>
    )
}

export default Pads;