import Pad from "../Pad/pad";
import "./drumPad.sass";

const DrumPad = () => {

    const soundBank = [
        {
            keyCode: 81,
            keyChar: 'Q',
            id: 'Cev_H2',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
        },
        {
            keyCode: 87,
            keyChar: 'W',
            id: 'Dry_Ohh',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
        },
        {
            keyCode: 69,
            keyChar: 'E',
            id: 'Dsc_Oh',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
        },
        {
            keyCode: 65,
            keyChar: 'A',
            id: 'Heater-6',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
        },
        {
            keyCode: 83,
            keyChar: 'S',
            id: "Kick-n'-Hat",
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
        },
        {
            keyCode: 68,
            keyChar: 'D',
            id: 'Bld_H1',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
        },
        {
            keyCode: 90,
            keyChar: 'Z',
            id: 'Punchy-Kick',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
        },
        {
            keyCode: 88,
            keyChar: 'X',
            id: 'Side-Stick',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
        },
        {
            keyCode: 67,
            keyChar: 'C',
            id: 'Snare',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
        }
    ];

    const handlePad = (e) => {
        const sound = e.target.children[0];
        sound.currentTime = 0;
        sound.play();
    }

    return (
        <div className='drumPad'>
            {soundBank && soundBank.map((pad, idx) => (
                <Pad
                    key={idx}
                    id={pad.id}
                    url={pad.url}
                    keyCode={pad.keyCode} 
                    keyChar={pad.keyChar}
                    handlePad={handlePad}
                />
            ))}
        </div>
    )
}

export default DrumPad;